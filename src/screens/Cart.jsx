import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

/**
 * /**
 * El componente 'Carrito' muestra una lista de artículos en un carrito de compras, calcula el
 * precio total, y permite al usuario confirmar el contenido del carrito para realizar el pedido.
 * @returns Devuelve el componente 'Carrito'. Muestra una lista de artículos del carrito con su
 * detalle, precio total y un botón de confirmación. Si no hay artículos en el carrito, muestra un
 * mensaje que indica que no se han añadido productos.
 */
const Cart = () => {
 

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = ()=> {
    triggerPost({ total, cartItems, user: "loggedUser"})
  } 


  return (
    
    <View style={styles.container}>
      {cartItems.length > 0 ? (
         <>
      <FlatList
        style={styles.list}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(cartItem) => cartItem.id}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>Total: ${total}</Text>
        <Pressable onPress={confirmCart}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
          </View>
          
</>
 ) : (
  <Text>No hay productos agregados</Text>
  
)}
</View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.green_300
  },
  list: {
    width: "70%"
  },
  confirmContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.green_400, 
    fontSize: 20, 
    padding: 15,
    width: "70%",
  }, 
  confirmText: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white"
  }
});
