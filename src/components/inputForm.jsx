import { StyleSheet, Text, TextInput, View } from "react-native";
import React, {useState} from "react";
import { colors } from "../global/colors";




/**
 * * El componente InputForm es un componente de formulario reutilizable que incluye una
 * etiqueta, manejo de errores y opción de entrada de texto segura.
 * @returns Devuelve el componente 'InputForm'. Consiste en una vista que contiene un componente de texto
 * para la etiqueta, un componente TextInput para la entrada de de datos por parte del usuario y un componente Text para mostrar
 * cualquier mensaje de error.
 */
const InputForm = ({label, error, onChange, isSecure}) => {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput
            style={styles.input}
            value={input}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
            />
            {error ? <Text style={styles.error}>{error}</Text>: null}
        </View>
    )
    }

    export default InputForm;

    const styles = StyleSheet.create({
        inputContainer: {
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        },
        subtitle: {
          width: "90%",
          fontSize: 16,
          fontFamily: 'PoppinsRegular',
        },
        error: {
          fontSize: 16,
          color: "red",
          fontFamily: 'PoppinsRegular',
          fontStyle: "italic",
        },
        input: {
          width: "90%",
          borderWidth: 0,
          borderBottomWidth: 3,
          borderBottomColor: colors.blue_100,
          padding: 2,
          fontFamily: 'PoppinsRegular',
          fontSize: 14,
        },
      });
  