import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Bayar from '../pages/Bayar';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator options={{headerShadowVisible: 'false'}}>
    <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
    <Stack.Screen name="Detail" component={Detail}  options={{ headerShown: false }} />
    <Stack.Screen name="Bayar" component={Bayar}  options={{ headerShown: false }} />
  </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})