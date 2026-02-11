import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen'
import MainScreen from './src/Screens/MainScreen'
import MyRoute from './src/Screens/MyRoute'
import AllRoutes from './src/Screens/AllRoutes'
import BusSchedule from './src/Screens/BusSchedule'
import DepartureSchedule from './src/Screens/DepartureSchedule'
import ArrivalSchedule from './src/Screens/ArrivalSchedule'
import LiveBusTracking from './src/Screens/LiveBusTracking'
import ChangeRoute from './src/Screens/ChangeRoute'
import RequestForTransport from './src/Screens/RequestForTransport'
import MyArrivalRoute from './src/Screens/MyArrivalRoute'
import MyDepartureRoute from './src/Screens/MyDepartureRoute'

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
          <Stack.Screen name="DepartureSchedule" component={DepartureSchedule} />
          <Stack.Screen name="ArrivalSchedule" component={ArrivalSchedule} />
          <Stack.Screen name="LiveBusTracking" component={LiveBusTracking} />
          <Stack.Screen name="ChangeRoute" component={ChangeRoute} />
          <Stack.Screen name="RequestForTransport" component={RequestForTransport} />
          <Stack.Screen name="MyArrivalRoute" component={MyArrivalRoute} />
          <Stack.Screen name="MyDepartureRoute" component={MyDepartureRoute} />
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
