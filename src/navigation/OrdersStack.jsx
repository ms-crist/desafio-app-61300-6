import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/Orders";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

/**
 * * El componente OrdersStack un stack navigator para mostrar los pedidos del carrito de compras.
 * @returns devuelve un componente llamado OrdersStack. Este componente utiliza la función de React Navigation
 * Stack Navigator para definir un stack de pantallas. La ruta inicial se establece en "Orders" y se
 * se proporciona el componente de encabezado con el título "Órdenes". La única pantalla definida en este stack es
 * la de "Orders" y renderiza el componente del mismo nombre.
 * 
 */
const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{ header: () => <Header title="Órdenes" /> }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
