import { FlatList, View, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";




function Categories({ navigation }) {
  //const categories = useSelector((state) => state.shopReducer.value.categories);

  const {data, isLoading, error} = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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