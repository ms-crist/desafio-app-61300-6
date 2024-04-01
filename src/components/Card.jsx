import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
colors

/**
 * 
 * El componente Card renderiza al componente hijo dentro de un componente View con estilos.
 *
 * @returns Devuelve un componente Card, que representa un componente View con elementos secundarios
 * en su interior. La propiedad style se extiende en el objeto styles.container al que se le aplica un estilo adicional
 * al componente Vista.
 */
const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 6, 
    elevation: 3,
    backgroundColor: colors.white_200,
    shadowColor: '#333', 
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
