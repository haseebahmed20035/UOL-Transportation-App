import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { routesByDay, getTodayId } from '../data/RouteModel';

const allRoutes = [
  {
    id: 1,
    title: 'Johar Town Route',
    arrival: '8:00 AM',
    departures: ['01:30 PM', '05:00 PM'],
    busNo: 'UOL-07',
    stops: ['Johar Town', 'Township', 'Thokar Niaz Baig', 'UOL Campus'],
  },
  {
    id: 2,
    title: 'Valencia Route',
    arrival: '8:10 AM',
    departures: ['02:00 PM', '05:30 PM'],
    busNo: 'UOL-08',
    stops: ['Valencia', 'Wapda Town', 'Thokar Niaz Baig', 'UOL Campus'],
  },
  {
    id: 3,
    title: 'Canal Route',
    arrival: '8:20 AM',
    departures: ['01:45 PM'],
    busNo: 'UOL-09',
    stops: ['Thokar Niaz Beg', 'Canal Road', 'Expo Center', 'UOL Campus'],
  },
];

const ChangeRoute = ({ navigation }) => {
  const todayRoute = routesByDay[getTodayId()];
  const [requestedRoute, setRequestedRoute] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const requestRouteChange = route => {
    setRequestedRoute(route);
    Alert.alert(
      'Request Sent',
      'Your route change request has been sent to admin.',
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Route</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.mainBody}>
        {/* CURRENT ROUTE */}
        <Text style={styles.sectionTitle}>Your Current Route</Text>

        <View style={styles.currentCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.routeTitle}>{todayRoute?.arrival?.title}</Text>
            <TouchableOpacity
              onPress={() => {
                setShowDetails(true);
                setSelectedRoute(todayRoute);
              }}
            >
              <Icon name="information-circle" size={35} color="#175812" />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Icon name="time-outline" size={18} color="#175812" />
            <Text style={styles.infoText}>
              Arrival: {todayRoute?.arrival?.time}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Icon name="log-out-outline" size={18} color="#175812" />
            <Text style={styles.infoText}>
              Departure: {todayRoute?.departure?.timings.join(', ')}
            </Text>
          </View>
        </View>

        {/* AVAILABLE ROUTES */}
        <Text style={styles.sectionTitle}>Available Routes</Text>

        {allRoutes.map(
          route =>
            route.id !== todayRoute?.id && (
              <View key={route.id} style={styles.routeCard}>
                <Text style={styles.routeTitle}>{route.title}</Text>

                <Text style={styles.infoText}>Arrival: {route.arrival}</Text>

                <Text style={styles.infoText}>
                  Departure: {todayRoute?.departure?.timings.join(', ')}
                </Text>

                <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                  {/* DETAILS BUTTON */}
                  <TouchableOpacity
                    style={styles.detailBtn}
                    onPress={() => {
                      setSelectedRoute(route);
                      setShowDetails(true);
                    }}
                  >
                    <Text style={styles.detailText}>Details</Text>
                  </TouchableOpacity>

                  {/* REQUEST BUTTON */}
                  <TouchableOpacity
                    style={styles.requestBtn}
                    onPress={() => requestRouteChange(route)}
                  >
                    <Text style={styles.requestText}>Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
        )}

        {/* ADMIN APPROVAL DEMO */}
        {requestedRoute && (
          <TouchableOpacity
            style={styles.approveBtn}
            onPress={() => {
              setCurrentRoute(requestedRoute);
              setRequestedRoute(null);
              Alert.alert('Approved', 'Admin approved your request!');
            }}
          >
            <Text style={styles.requestText}>(Demo) Admin Approve Request</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* DETAILS MODAL */}
      {showDetails && selectedRoute && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {selectedRoute?.arrival?.title || selectedRoute?.title}
            </Text>

            <Text style={styles.infoText}>
              Bus No: {selectedRoute?.arrival?.busNo || selectedRoute?.busNo}
            </Text>

            <Text style={styles.infoText}>
              Arrival: {selectedRoute?.arrival?.time || selectedRoute?.arrival}
            </Text>

            <Text style={styles.infoText}>
              Departure:{' '}
              {selectedRoute?.departure?.timings
                ? selectedRoute.departure.timings.join(', ')
                : selectedRoute?.departures?.join(', ')}
            </Text>

            <Text style={styles.subTitle}>Route Stops</Text>

            {selectedRoute.stops.map((stop, index) => (
              <View key={index} style={styles.stopRow}>
                <View style={styles.timeline}>
                  <View style={styles.dot} />
                  {index !== selectedRoute.stops.length - 1 && (
                    <View style={styles.line} />
                  )}
                </View>
                <Text style={styles.stopText}>
                  {typeof stop === 'string' ? stop : stop.name}
                </Text>
              </View>
            ))}

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowDetails(false)}
            >
              <Text style={styles.requestText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChangeRoute;

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

  mainBody: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#175812',
  },

  currentCard: {
    backgroundColor: '#DFF0E2',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  routeCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 5,
  },

  infoText: {
    fontSize: 14,
    color: '#0F2F1B',
  },

  detailBtn: {
    backgroundColor: '#0F2F1B',
    padding: 10,
    borderRadius: 8,
  },

  detailText: {
    color: 'white',
    fontWeight: 'bold',
  },

  requestBtn: {
    backgroundColor: '#175812',
    padding: 10,
    borderRadius: 8,
  },

  approveBtn: {
    marginTop: 20,
    backgroundColor: '#FF9800',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  requestText: {
    color: 'white',
    fontWeight: 'bold',
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },

  modalCard: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 18,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#175812',
  },

  subTitle: {
    marginTop: 12,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 10,
  },

  closeBtn: {
    marginTop: 15,
    backgroundColor: '#175812',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  stopRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  timeline: {
    width: 20,
    alignItems: 'center',
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
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
  },
});
