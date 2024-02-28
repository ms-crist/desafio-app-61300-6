import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/colors";
import Card from "../components/Card";
import { AntDesign } from '@expo/vector-icons';
import Footer from "../components/FooterApp";




const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <><View style={{ flexDirection: 'row', backgroundColor: colors.blue_100 }}>
      <AntDesign name="arrowleft" size={24} color="white"></AntDesign>
      <Button
        title="Volver"
        color={colors.green_300}
        onPress={() => navigation.navigate('Home', { name: 'Home' })} />
    </View>
    <View style={{ backgroundColor: colors.green_300, width: "100%"}}>
    <Card>
        <View style={styles.main}>
          {product ? (
            <View style={styles.container}>
              <Image
                source={{ uri: product.images }}
                style={styles.image}
                resizeMode="cover" />
              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>{product.title}</Text>
                <Text style={styles.descriptionText}>{product.brand}</Text>
                <Text style={styles.descriptionTextPrice}>${product.price}</Text>
                <Pressable style={styles.buy}>
                  <Text style={styles.buyText}>Comprar</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View>
              <Text>Cargando...</Text>
            </View>
          )}
        </View>
      </Card>
      </View>
      <Footer/>
      </>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "30%",
    height: 250,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  descriptionText: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    color: "black",
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: "PoppinsRegular",
    fontSize: 25,
    color: "black",
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.blue_100,
  },
  buyText: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
    color: "white",
  },
});
