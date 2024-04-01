import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

/**
 * La función 'CartStack' devuelve un stack navigator para una pantalla de carrito de compras.
 * @returns Devuelve un componente 'Stack.Navigator' con una ruta inicial denominada "Cart". Dentro de
 * 'Stack.Navigator', el componente 'Stack.Screen' se define con el nombre "Cart" y el componente 'Cart'
 * como su contenido.
 * 
 */
const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ header: () => <Header title="Carrito" /> }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
