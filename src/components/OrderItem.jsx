import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";



/* 
El componente 'OrderItem' es un componente funcional en React que toma una prop 'item'. Dentro de este
componente, calcula el precio total de los artículos en el objeto 'item' iterando sobre el arreglo
'items' usando el método 'reduce'.
*/
const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    
    <Card style={{width: '45%', justifyContent: 'center', marginLeft: '30%'}}>
      <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.descriptionText}>{item.title}</Text>
      <Text style={styles.descriptionText}>{new Date(item.createdAt).toLocaleString()}</Text>
      <Text style={styles.descriptionText}>Precio:$ {total}</Text>
      </View>
      </View>
    </Card>
   
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
  
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  descriptionText: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "black",
    paddingVertical: 4
  }
});
