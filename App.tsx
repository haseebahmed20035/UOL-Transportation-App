import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen'
import MainScreen from './Screens/MainScreen'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
