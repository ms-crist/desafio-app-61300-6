import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable, Button } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";



/* 
/* Este código define un componente funcional denominado 'ItemListCategories' que muestra una lista de productos
filtrado por una categoría específica y muestra un cuadro de búsqueda de productos.  */

function ItemListCategories({ navigation  }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector((state)=> state.shopReducer.value.categorySelected );
  const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    if (productsFilteredByCategory) {
        const productsRaw = Object.values(productsFilteredByCategory)
        const productsFiltered = productsRaw.filter((product) =>
            product.title.includes(keyword)
        );
        setProducts(productsFiltered);
    }
}, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.blue_100, width: '100%'}}>
      <View style={{flexDirection: 'row', backgroundColor: colors.blue_100, marginRight: 280}}>
      <AntDesign name="arrowleft" size={24} color="white"></AntDesign>
      <Button
        title="Volver"
        color={colors.green_300}
        onPress={() =>
          navigation.navigate('Home', { name: 'Home' })
        }
      />
      </View>
      </View>
      <Search onSearch={setKeyword} />
      <FlatList style={{width: "70%", marginTop: 30}}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      <View style={{width: "100%"}} >
      </View>
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green_300
  },
});
