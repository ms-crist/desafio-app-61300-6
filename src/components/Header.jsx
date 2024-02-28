import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Header({ title }) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Entypo name="classic-computer" size={24} color="white" />
      <Text style={styles.text}>PC Store</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <MaterialCommunityIcons name="web-box" size={28} color="white" />
      <Text style={styles.text}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Entypo name="menu" size={24} color="white" />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: "100%",
    backgroundColor: colors.green_400,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: 'PoppinsBold'
  },
});
