import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const days = [
  { id: 1, day: 'Mon', date: '16 Dec' },
  { id: 2, day: 'Tue', date: '17 Dec' },
  { id: 3, day: 'Wed', date: '18 Dec' },
  { id: 4, day: 'Thu', date: '19 Dec' },
  { id: 5, day: 'Fri', date: '20 Dec' },
  { id: 6, day: 'Sat', date: '21 Dec' },
  { id: 7, day: 'Sun', date: '22 Dec' },
];

const routesByDay = {
  1: {
    title: 'Johar Town → UOL (Via DHA & Township)',
    arrival: '8:00 AM',
    stops: [
      'Johar Town',
      'Township',
      'Thokar Niaz Baig',
      'Bhoptian Chowk',
      'DHA Rehbar',
      'UOL Campus',
    ],
  },

  2: {
    title: 'Johar Town → UOL (Via Valencia)',
    arrival: '8:10 AM',
    stops: [
      'Johar Town',
      'Wapda Town',
      'Valencia',
      'Thokar Niaz Baig',
      'UOL Campus',
    ],
  },

  3: {
    title: 'Johar Town → UOL (Canal Route)',
    arrival: '8:20 AM',
    stops: ['Johar Town', 'Expo Center', 'Canal Road', 'UOL Campus'],
  },

  4: {
    title: 'Johar Town → UOL (Direct)',
    arrival: '8:00 AM',
    stops: ['Johar Town', 'Thokar Niaz Baig', 'UOL Campus'],
  },

  5: {
    title: 'Johar Town → UOL (Canal Route)',
    arrival: '8:20 AM',
    stops: ['Johar Town', 'Expo Center', 'Canal Road', 'UOL Campus'],
  },

  6: {
    title: 'Weekend Shuttle',
    arrival: '9:00 AM',
    stops: ['Johar Town', 'UOL Campus'],
  },

  7: null,
};

const ArrivalSchedule = ({ navigation }) => {
  const [enableDay, setEnableDay] = useState(1);

  const selectedDay = days.find(d => d.id === enableDay);
  const route = routesByDay[enableDay];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Arrival Schedule</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* DATE SELECTOR */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateRow}
      >
        {days.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.dateBox,
              enableDay === item.id && styles.activeDateBox,
            ]}
            onPress={() => setEnableDay(item.id)}
          >
            <Text
              style={[
                styles.dayText,
                enableDay === item.id && styles.activeText,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText,
                enableDay === item.id && styles.activeText,
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.scheduleCard}>
          <Text style={styles.cardTitle}>Schedule for {selectedDay.day}</Text>

          {!route ? (
            <Text style={styles.noBusText}>
              No bus service available on this day
            </Text>
          ) : (
            <>
              {/* ROUTE TITLE */}
              <View style={styles.infoRow}>
                <Icon name="navigate-outline" size={20} color="#175812" />
                <Text style={styles.infoText}>{route.title}</Text>
              </View>

              <View style={styles.divider} />

              {/* ARRIVAL TIME */}
              <Text style={styles.subTitle}>Arrival at University</Text>

              <View style={styles.infoRow}>
                <Icon name="time-outline" size={20} color="#175812" />
                <Text style={styles.infoText}>{route.arrival}</Text>
              </View>

              <View style={styles.divider} />

              {/* ROUTE STOPS */}
              <Text style={styles.subTitle}>Pickup Stops</Text>

              {route.stops.map((stop, index) => (
                <View key={index} style={styles.stopRow}>
                  <View style={styles.timeline}>
                    <View style={styles.dot} />
                    {index !== route.stops.length - 1 && (
                      <View style={styles.line} />
                    )}
                  </View>
                  <Text style={styles.stopText}>{stop}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ArrivalSchedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7F6',
    flex: 1,
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

  dateRow: {
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  dateBox: {
    height: 80,
    width: 68,
    backgroundColor: '#E6EFEA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 2,
  },

  activeDateBox: {
    backgroundColor: '#175812',
  },

  dayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#175812',
  },

  dateText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#175812',
    marginTop: 2,
  },

  activeText: {
    color: 'white',
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  scheduleCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    minHeight: 575,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#175812',
    marginBottom: 14,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },

  infoText: {
    fontSize: 15,
    color: '#0F2F1B',
    fontWeight: '600',
  },

  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#175812',
    marginTop: 6,
    marginBottom: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },

  noBusText: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },

  stopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
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
    color: '#0F2F1B',
  },
});
