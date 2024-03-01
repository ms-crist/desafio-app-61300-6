import { StyleSheet, Text, View} from "react-native";
import React from "react";
import { colors } from "../global/colors";


const SubmitButton = () =>{
    return (
        <Button
        title="Enviar"
        color={colors.green_300}
        onPress={onPress} />
    );
};

export default SubmitButton;