import { FlatList, StyleSheet, Text, View } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";

/**
 *
 *  El componente Orders renderiza una lista de pedidos mediante una lista (FlatList).
 * @returns Devuelve el componente Orders, que contiene un componente Vista con un FlatList que 
 * representa los componentes (OrderItem) para cada elemento de la matriz de datos (orders).
 */
const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
