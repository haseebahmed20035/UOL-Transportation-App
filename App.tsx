import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen'
import MainScreen from './src/Screens/MainScreen'
import MyRoute from './src/Screens/MyRoute'
import AllRoutes from './src/Screens/AllRoutes'
import BusSchedule from './src/Screens/BusSchedule'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="MyRoute" component={MyRoute} />
          <Stack.Screen name="AllRoutes" component={AllRoutes} />
          <Stack.Screen name="BusSchedule" component={BusSchedule} />
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
