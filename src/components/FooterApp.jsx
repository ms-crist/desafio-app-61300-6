import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";


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