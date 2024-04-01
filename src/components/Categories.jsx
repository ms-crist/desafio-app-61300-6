import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../services/shopService";

/* Este código define un componente funcional llamado 'Categories' que toma una propiedad de 'navegación'. Dentro
del componente, se utiliza el hook 'useGetCategoriesQuery' para obtener datos, estado de carga y estado de error
relacionado con las categorías.

*/
function Categories({ navigation }) {

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