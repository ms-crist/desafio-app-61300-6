import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";




const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(cartItem) => cartItem.id}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
      <Text style={styles.confirmText}>Total: ${total}</Text>
    </View>
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
