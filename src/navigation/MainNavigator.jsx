import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from "react-redux";


const MainNavigator = () => {
   // const [user, setUser] = UserState(null);
    const user = useSelector(state => state.authReducer.value.user)
  return (
    <NavigationContainer>
        {user ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
   
   
  )
}

export default MainNavigator

const styles = StyleSheet.create({})