import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'


const CartItem = ({item}) => {
  return (
    <Card style={{width: '65%', justifyContent: 'center', marginLeft: '20%'}}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.descriptionText}>{item.title}</Text>
      <Text style={styles.descriptionText}>{item.brand}</Text>
      <Text style={styles.descriptionText}>Precio:$ {item.price}</Text>
      </View>
    </View>
    </Card>
  )
}

export default CartItem

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
  },

})