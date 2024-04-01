import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";

/**
 * /**
 * El componente Navigator configura un stack navigator en una aplicación React Native con diferentes pantallas y
 * títulos de encabezado personalizados basados en la ruta.
 * @returns devuelve un componente de Navigator. Dentro de NavigationContainer, hay un
 * Stack.Navigator con initialRouteName establecido en "Home" y screenOptions definido para personalizar el
 * encabezado basado en el nombre de la ruta. Se definen tres componentes de Stack.Screen para las rutas "Home",
 * "ItemDetail" y "ItemListCategories".
 */

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
                    : "Detalle"
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
    </NavigationContainer>
  );
};

export default Navigator;
