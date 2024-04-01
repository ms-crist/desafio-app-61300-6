import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";


/**
 * Este componente de búsqueda permite a los usuarios ingresar una consulta de búsqueda, realizar una búsqueda y
 * borrar el campo de entrada.
 * @returns Devuelve el componente Buscar. Consiste en una vista que contiene un campo de búsqueda de productos,
 *  un icono de búsqueda (AntDesign) y un icono para eliminar lo escrito en el campo de entrada (Entypo). El usuario puede ingresar
 * texto en el campo de búsqueda, hacer clic en el icono para activar la función de búsqueda y clickear en el botón
 * eliminar para borrar el campo de texto.
 * 
 */
const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Buscar producto..."
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: colors.green_300
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
    backgroundColor: colors.white_200
  }
});
