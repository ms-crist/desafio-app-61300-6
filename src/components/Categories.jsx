import { FlatList, View, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";




function Categories({ navigation }) {
  const categories = useSelector((state) => state.shopReducer.value.categories);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
    
  );
}

export default Categories;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center'
  },
  text: {
    textAlignVertical: 'bottom',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    padding: 10,
    paddingTop: 30,
    paddingRight: 70
  },
});