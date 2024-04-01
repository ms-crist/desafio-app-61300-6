import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";

/**
 * * El componente Navigator crea un stack navigator con diferentes pantallas.
 * @returns Devuelve un componente de Navigator. Utiliza un Stack Navigator de
 * createNativeStackNavigator y define diferentes pantallas con sus correspondientes componentes (Home,
 * ItemDetail, ItemListCategories). La función screenOptions se utiliza para personalizar el encabezado en función del 
 * nombre de la ruta.
 * 
 */
const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categorías"
                    : route.name === "ItemListCategories"
                    ? route.params.category
                    : "Detalle de producto"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
  );
};

export default Navigator;
