import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

/* GET TODAY ID */
const getTodayId = () => {
  const jsDay = new Date().getDay(); // 0=Sun, 1=Mon...
  const map = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
  return map[jsDay];
};

/* ROUTES DATA (SAME AS BUS SCHEDULE) */
const routesByDay = {
  1: {
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
  },

  2: {
    day: 'Tuesday',
    title: 'UOL → Johar Town (Via Valencia)',
    arrival: '8:10 AM',
    departures: ['02:00 PM', '05:30 PM'],
    busNo: 'UOL-07',
    stops: [
      'UOL Campus',
      'Thokar Niaz Baig',
      'Valencia',
      'Wapda Town',
      'Johar Town',
      'Allama Iqbal Town',
    ],
  },

  3: {
    day: 'Wednesday',
    title: 'UOL → Johar Town (Canal Route)',
    arrival: '8:20 AM',
    departures: ['01:45 PM'],
    busNo: 'UOL-07',
    stops: [
      'UOL Campus',
      'Canal Road',
      'Expo Center',
      'Johar Town',
    ],
  },

  4: {
    day: 'Thursday',
    title: 'UOL → Johar Town (Direct)',
    arrival: '8:00 AM',
    departures: ['01:30 PM'],
    busNo: 'UOL-07',
    stops: [
      'UOL Campus',
      'Thokar Niaz Baig',
      'Johar Town',
    ],
  },

  5: null, // Friday

  6: {
    day: 'Saturday',
    title: 'Weekend Shuttle',
    arrival: '9:00 AM',
    departures: ['02:00 PM'],
    busNo: 'UOL-Weekend',
    stops: [
      'UOL Campus',
      'Johar Town',
    ],
  },

  7: null, // Sunday
};

const MyRoute = ({ navigation }) => {
  const todayId = getTodayId();
  const todayRoute = routesByDay[todayId];

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
          {!todayRoute ? (
            <Text style={styles.noBusText}>
              No bus service available today
            </Text>
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
            </>
          )}
        </View>

        {/* ROUTE STOPS */}
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
                <Text style={styles.stopText}>{stop}</Text>
              </View>
            ))}
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

export default MyRoute;

/* STYLES */
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

  noBusText: {
    fontSize: 15,
    color: '#777',
    fontStyle: 'italic',
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
