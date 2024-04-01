import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'


/*  Este código define un componente funcional denominado 'CartItem' que toma una propiedad 'item'. Dentro del componente
, devuelve una estructura que incluye un componente 'Card' con estilos específicos, un componente 'View'
con un estilo de contenedor, y componentes anidados 'Vista' y 'Texto' con estilos para mostrar
las propiedades 'title', 'brand' y 'price' de la propiedad 'item'. El objeto 'styles' contiene las
configuraciones de estilo para los diferentes elementos dentro del componente.*/
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