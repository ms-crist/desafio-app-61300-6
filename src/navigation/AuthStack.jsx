import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{ header: () => <Header title="Bienvenidos" /> }}
    >
    <Stack.Screen name="Register" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
