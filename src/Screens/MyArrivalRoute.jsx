import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker, Polyline } from 'react-native-maps';

const getTodayId = () => {
  const jsDay = new Date().getDay();
  const map = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
  return map[jsDay];
};

const routesByDay = {
  1: {
    day: 'Monday',
    title: 'Johar Town → UOL (Via DHA & Township)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Township', lat: 31.4504, lng: 74.2906 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'Bhoptian Chowk', lat: 31.49, lng: 74.26 },
      { name: 'DHA Rehbar', lat: 31.43, lng: 74.24 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  2: {
    day: 'Tuesday',
    title: 'Johar Town → UOL (Via Valencia)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Allama Iqbal Town', lat: 31.51, lng: 74.3 },
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Wapda Town', lat: 31.43, lng: 74.27 },
      { name: 'Valencia', lat: 31.4, lng: 74.26 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  3: {
    day: 'Wednesday',
    title: 'Johar Town → UOL (Canal Route)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Expo Center', lat: 31.48, lng: 74.32 },
      { name: 'Canal Road', lat: 31.5, lng: 74.33 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  4: {
    day: 'Thursday',
    title: 'Johar Town → UOL (Direct)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  5: null,

  6: {
    day: 'Saturday',
    title: 'Weekend Shuttle',
    arrival: '9:00 AM',
    busNo: 'UOL-Weekend',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  7: null,
};

const MyArrivalRoute = ({ navigation }) => {
  const todayId = getTodayId();
  const todayRoute = routesByDay[todayId];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Arrival Route</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ROUTE SUMMARY */}
        <View style={styles.card}>
          {!todayRoute ? (
            <Text style={styles.noBusText}>No bus service available today</Text>
          ) : (
            <>
              <Text style={styles.routeName}>
                Today’s Route ({todayRoute.day})
              </Text>

              <View style={styles.infoRow}>
                <Icon name="navigate-outline" size={18} color="#175812" />
                <Text style={styles.infoText}>{todayRoute.title}</Text>
              </View>

              <View style={styles.infoRow}>
                <Icon name="bus-outline" size={18} color="#175812" />
                <Text style={styles.infoText}>Bus No: {todayRoute.busNo}</Text>
              </View>

              <View style={styles.infoRow}>
                <Icon name="time-outline" size={18} color="#175812" />
                <Text style={styles.infoText}>
                  Arrival at University: {todayRoute.arrival}
                </Text>
              </View>
            </>
          )}
        </View>
        {todayRoute && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Route Stops</Text>

            {todayRoute.stops.map((stop, index) => (
              <View key={index} style={styles.stopRow}>
                <View style={styles.timeline}>
                  <View style={styles.dot} />
                  {index !== todayRoute.stops.length - 1 && (
                    <View style={styles.line} />
                  )}
                </View>
                <Text style={styles.stopText}>{stop.name}</Text>
              </View>
            ))}
          </View>
        )}
        {/* MAP */}
        {todayRoute && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Route Map</Text>

            <MapView
              style={styles.map}
              initialRegion={{
                latitude: todayRoute.stops[0].lat,
                longitude: todayRoute.stops[0].lng,
                latitudeDelta: 0.25,
                longitudeDelta: 0.25,
              }}
            >
              {todayRoute.stops.map((stop, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: stop.lat,
                    longitude: stop.lng,
                  }}
                  title={stop.name}
                  pinColor="red"
                />
              ))}

              <Polyline
                coordinates={todayRoute.stops.map(stop => ({
                  latitude: stop.lat,
                  longitude: stop.lng,
                }))}
                strokeWidth={4}
                strokeColor="#175812"
              />
            </MapView>
          </View>
        )}

        {/* ACTION */}
        {todayRoute && (
          <TouchableOpacity style={styles.trackButton}>
            <Icon name="location-outline" size={20} color="white" />
            <Text style={styles.trackText}>Track Live Bus</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default MyArrivalRoute;

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

  scrollContainer: {
    padding: 14,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },

  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 10,
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
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 12,
  },

  noBusText: {
    fontSize: 15,
    color: '#777',
    fontStyle: 'italic',
  },

  map: {
    height: 180,
    borderRadius: 10,
  },

  stopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },

  timeline: {
    alignItems: 'center',
    width: 20,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#175812',
  },

  line: {
    width: 2,
    height: 28,
    backgroundColor: '#175812',
    marginTop: 2,
  },

  stopText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#0F2F1B',
    fontWeight: '600',
  },

  trackButton: {
    backgroundColor: '#175812',
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  trackText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
