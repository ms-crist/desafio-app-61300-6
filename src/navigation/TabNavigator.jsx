import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "../navigation/ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { MaterialCommunityIcons, Octicons, FontAwesome, Fontisto } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import { fonts } from "../global/fonts";


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
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
