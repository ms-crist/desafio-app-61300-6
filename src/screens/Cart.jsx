import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";




const Cart = () => {
 /*  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0) */

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = ()=> {
    triggerPost({ total, cartItems, user: "loggedUser"})
  } 

  /* useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []); */

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
        <Text>Total: ${total}</Text>
        <Pressable onPress={confirmCart}>
            <Text>Confirmar</Text>
          </Pressable>
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
    padding: 15,
    width: "70%"
  }, 
  confirmText: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white"
  }
});
