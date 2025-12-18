import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

/* TODAY ROUTE (same data model as BusSchedule) */
const todayRoute = {
  day: 'Monday',
  title: 'UOL → Johar Town (Via DHA & Township)',
  arrival: '8:00 AM',
  departures: ['01:30 PM', '05:00 PM'],
  busNo: 'UOL-07',
  stops: [
    'UOL Campus',
    'DHA Rehbar',
    'Bhoptian Chowk',
    'Thokar Niaz Baig',
    'Johar Town',
    'Township',
  ],
};

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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ROUTE SUMMARY */}
        <View style={styles.card}>
          <Text style={styles.routeName}>
            Today’s Route ({todayRoute.day})
          </Text>

          <View style={styles.infoRow}>
            <Icon name="navigate-outline" size={18} color="#175812" />
            <Text style={styles.infoText}>{todayRoute.title}</Text>
          </View>

          <View style={styles.infoRow}>
            <Icon name="bus-outline" size={18} color="#175812" />
            <Text style={styles.infoText}>
              Bus No: {todayRoute.busNo}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Icon name="time-outline" size={18} color="#175812" />
            <Text style={styles.infoText}>
              Arrival at University: {todayRoute.arrival}
            </Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.subTitle}>Departure from University</Text>

          {todayRoute.departures.map((time, index) => (
            <View key={index} style={styles.infoRow}>
              <Icon name="bus-outline" size={18} color="#175812" />
              <Text style={styles.infoText}>{time}</Text>
            </View>
          ))}
        </View>

        {/* STOPS */}
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

              <Text style={styles.stopText}>{stop}</Text>
            </View>
          ))}
        </View>

        {/* ACTION */}
        <TouchableOpacity style={styles.trackButton}>
          <Icon name="location-outline" size={20} color="white" />
          <Text style={styles.trackText}>Track Live Bus</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MyRoute;

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

  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#175812',
    marginTop: 8,
    marginBottom: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 12,
  },

  /* STOPS */
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

  /* BUTTON */
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
