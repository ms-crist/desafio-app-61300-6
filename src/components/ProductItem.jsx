import { StyleSheet, Text, Image, Pressable } from "react-native";
import Card from "./Card";



const ProductItem = ({product, navigation}) => {
  return (
    <><Pressable style={styles.card} onPress={() => navigation.navigate("ItemDetail", { id: product.id })}><Card>
      <Text style={styles.text}>{product.title}</Text>
      <Image style={styles.image} source={{ uri: product.images }} />
    </Card>
    </Pressable>
    </>
    
    
 
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    width: '70%',
    padding: 20
  },
  image: {
    width: '30%',
  },
  textMin: {
    fontSize: 14,
    width: '70%'
  }
});
