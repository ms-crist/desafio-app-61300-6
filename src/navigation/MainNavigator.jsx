import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProfileImageQuery
} from "../services/shopService";
import { setProfileImage, setUserLocation, setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";

/**
 * 
 * El componente 'MainNavigator' en React Native maneja la autenticación del usuario y la recuperación de la imagen de perfil
 * mediante hooks de Redux y renderizado condicional de componentes de navegación.
 * @returns devuelve el componente MainNavigator. Dentro del componente, comprueba si hay
 * un usuario que ha iniciado sesión accediendo al user state desde el authReducer mediante useSelector. A continuación, utiliza
 * el hook useGetProfileImageQuery para obtener los datos de la imagen de perfil basado en su localId. Si los datos
 * están disponibles busca los datos de la imagen y envía una acción para establecer la imagen de perfil.
 */
const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        console.log('aaaaaa'); 
        console.log("local", session.rows._array);
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();

  }, []);

  useEffect(() => {
    if (data) {
      console.log(data.image);
      dispatch(setProfileImage(data.image));
    }
  }, [data]);

  return (
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
