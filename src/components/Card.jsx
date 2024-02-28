import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
colors

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
