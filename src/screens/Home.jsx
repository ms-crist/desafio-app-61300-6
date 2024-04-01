import {View, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import { colors } from "../global/colors";



/**
 * 
 * La función Home renderiza un componente View que contiene el componente Categories con un prop de navegación.
 * @returns Regresa un componente View con un estilo de styles.container.
 * 
 */
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.green_300
  },
});
