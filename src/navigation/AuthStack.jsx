import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

/**
 *
 * La función AuthStack en React Native configura un stack navigator con pantallas para
 * el registro de usuarios e inicio de sesión, mostrando un encabezado con el título "Bienvenidos".
 * @returns La función 'AuthStack' devuelve un componente 'Stack.Navigator' con dos componentes 'Stack.Screen'
 * en su interior(Register y Login). La ruta inicial se establece en "Login".
 * 
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => <Header title="Bienvenidos" /> }}
    >
    <Stack.Screen name="Register" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
