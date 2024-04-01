import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator";

/**
 * 
 *  La función 'App' garantiza que las fuentes se carguen antes de renderizar el componente 'MainNavigator'
 * dentro de un componente 'Proveedor'.
 * @returns devuelve el componente App. Si las fuentes utilizadas en la aplicación no se cargan, devuelve null.
 * De lo contrario, devuelve el componente Provider con el store prop y el componente MainNavigator como
 * su componente hijo.
 */

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
