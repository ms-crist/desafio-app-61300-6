import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";


/**
 * El componente Footer en una aplicación React Native muestra información de derechos reservados para una PC Store con 
 * iconos y texto.
 * @returns Un componente de vista que contiene un icono de AntDesign con el nombre "infocirlceo", de un tamaño de 24,
 * y color blanco, junto con un componente de texto que muestra el texto "© 2024 PC Store".
 */
function Footer() {
  return (
    <View style={styles.container}>
      <AntDesign name="infocirlceo" size={24} color="white" />
      <Text style={styles.text}> © 2024 PC Store</Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
 container: {
  width: '100%',
    marginTop: 200,
    flexDirection: 'row',
    backgroundColor: colors.green_400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontFamily: 'PoppinsBold'
  },
});