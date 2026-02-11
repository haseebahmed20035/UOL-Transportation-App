import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const MyRoute = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Route</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* CONTENT */}
      <View style={styles.content}>

        {/* Arrival Button */}
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('MyArrivalRoute')}
        >
          <Icon name="log-in-outline" size={28} color="#0F2F1B" />
          <Text style={styles.boxText}>My Arrival Route</Text>
        </TouchableOpacity>

        {/* Departure Button */}
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('MyDepartureRoute')}
        >
          <Icon name="log-out-outline" size={28} color="#0F2F1B" />
          <Text style={styles.boxText}>My Departure Route</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default MyRoute

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#175812',
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    paddingVertical:30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  box: {
    width: '45%',
    backgroundColor: '#7FAF8A',
    borderColor: 'rgba(26,128,63,0.5)',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 2,
  },

  boxText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F2F1B',
    textAlign: 'center',
  },
})
