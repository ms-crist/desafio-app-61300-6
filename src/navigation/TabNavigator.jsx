import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "../navigation/ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { MaterialCommunityIcons, Octicons, Fontisto } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";


/* Este fragmento de código define un componente funcional llamado 'TabNavigator' que crea una pestaña inferior
navegación mediante la función 'createBottomTabNavigator' con las pantallas Tienda, Carrito, 
Órdenes y perfil */

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopTab"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <Fontisto name="shopping-store" size={30} color={focused ? "white" : "black"} />
                  <Text style={{ color: focused ? "white" : "black" }}>Tienda</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <MaterialCommunityIcons name="cart-variant" size={30} color={focused ? "white" : "black"} />
                  <Text style={{ color: focused ? "white" : "black" }}>Carrito</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabContainer}>
                  <Octicons name="checklist" size={30} color={focused ? "white" : "black"} />
                  <Text style={{ color: focused ? "white" : "black" }}>Órdenes</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Octicons name="feed-person" size={30} color={focused ? "white" : "black"} />
                <Text style={{ color: focused ? "white" : "black"}}>Perfil</Text>
              </View>
            );
          },
        }}
      />
      </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.green_400,
    height: 70,
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "PoppinsBold",
    fontSize: 18
  },
});
