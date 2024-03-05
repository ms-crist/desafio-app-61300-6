import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green_400,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '40%'
    },
    text: {
        color: colors.blue_100,
        fontFamily: 'PoppinsRegular',
        fontSize: 22
    },
});