import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

const routesData = [
  {
    id: 1,
    name: 'Township → UOL',
    busNo: 'UOL-07',
    time: '7:15 AM - 4:30 PM',
    stops: [
      { name: 'Township', lat: 31.4504, lng: 74.2906 },
      { name: 'Akbar Chowk', lat: 31.4803, lng: 74.3239 },
      { name: 'Kalma Chowk', lat: 31.5001, lng: 74.3297 },
      { name: 'UOL Campus', lat: 31.3600, lng: 74.1800 },
    ],
  },
  {
    id: 2,
    name: 'DHA → UOL',
    busNo: 'UOL-12',
    time: '7:00 AM - 5:00 PM',
    stops: [
      { name: 'DHA Phase 4', lat: 31.4697, lng: 74.4100 },
      { name: 'Ghazi Road', lat: 31.4400, lng: 74.3800 },
      { name: 'UOL Campus', lat: 31.3600, lng: 74.1800 },
    ],
  },
];

const AllRoutes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>All Routes</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {routesData.map(route => (
          <View key={route.id} style={styles.card}>
            {/* ROUTE INFO */}
            <Text style={styles.routeName}>{route.name}</Text>

            <View style={styles.infoRow}>
              <Icon name="bus-outline" size={18} color="#175812" />
              <Text style={styles.infoText}>Bus No: {route.busNo}</Text>
            </View>

            <View style={styles.infoRow}>
              <Icon name="time-outline" size={18} color="#175812" />
              <Text style={styles.infoText}>{route.time}</Text>
            </View>

            <View style={styles.infoRow}>
              <Icon name="location-outline" size={18} color="#175812" />
              <Text style={styles.infoText}>
                Stops: {route.stops.length}
              </Text>
            </View>

            {/* MAP */}
            <Text style={{fontWeight:"bold"}}>MAP HERE</Text>
            {/* <MapView
              style={styles.map}
              initialRegion={{
                latitude: route.stops[0].lat,
                longitude: route.stops[0].lng,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
            >
              {route.stops.map((stop, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: stop.lat,
                    longitude: stop.lng,
                  }}
                  title={stop.name}
                />
              ))}
            </MapView> */}

            {/* ACTION */}
            <TouchableOpacity style={styles.detailsBtn}>
              <Text style={styles.detailsText}>View Route Details</Text>
              <Icon name="chevron-forward" size={18} color="#175812" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllRoutes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  /* HEADER */
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

  scrollContainer: {
    padding: 14,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    elevation: 2,
  },

  routeName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#0F2F1B',
    fontWeight: '600',
  },

  map: {
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },

  detailsBtn: {
    marginTop: 12,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#175812',
  },
});
