import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const routes = [
  'Johar Town Route',
  'Valencia Route',
  'Canal Route',
  'Direct Route',
];

const RequestForTransport = ({ navigation }) => {

  const selectRoute = async (route) => {
  await AsyncStorage.setItem('transportStatus', 'pending');
  await AsyncStorage.setItem('selectedRoute', route);

  alert('Request sent to admin for approval');

  navigation.goBack();
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request For Transport</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.title}>Select Your Route</Text>

        {routes.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={styles.routeCard}
            onPress={() => selectRoute(route)}
          >
            <Icon name="bus-outline" size={22} color="#175812" />
            <Text style={styles.routeText}>{route}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RequestForTransport;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F6' },

  header: {
    flexDirection: 'row',
    backgroundColor: '#175812',
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: { color: 'white', fontSize: 18, fontWeight: 'bold' },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 15,
  },

  routeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    gap: 10,
  },

  routeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F2F1B',
  },
});
