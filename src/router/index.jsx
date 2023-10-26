import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator options={{headerShadowVisible: 'false'}}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})