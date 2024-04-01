import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";


const Stack = createNativeStackNavigator();

/**
 * La función MyProfileStack devuelve un Stack navigator con rutas iniciales para Mi perfil e image
 * selector.
 * @returns Se devuelve un componente 'Stack.Navigator' con un nombre de ruta inicial establecido en "Mi
 * Perfil".  Dos componentes de 'Stack.Screen' se definen dentro de 'Stack.Navigator' para las pantallas "My profile" e
  * "Image Selector", cada uno asociado a su respectivo componente.
 */
const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="Mi Perfil" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;