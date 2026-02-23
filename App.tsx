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
import Chatbot from './src/Screens/Chatbot'
import MyPersonalInfo from './src/Screens/MyPersonalInfo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator
  screenOptions={({route}) => ({
  headerShown:false,
  tabBarIcon: ({color, size}) => {

    let iconName;

    if(route.name === "Home"){
      iconName = "home";
    }
    else if(route.name === "Chatbot"){
      iconName = "chatbubble-ellipses";
    }

    return <Icon name={iconName} size={size} color={color}/>
  }
})}
>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Chatbot" component={Chatbot} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tabs" component={BottomTabs} />
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
        <Stack.Screen name="MyPersonalInfo" component={MyPersonalInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
