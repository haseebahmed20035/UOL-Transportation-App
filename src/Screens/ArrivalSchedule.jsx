import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { routesByDay, getTodayId } from '../data/RouteModel';


// 🔥 CURRENT WEEK GENERATOR (MON–SUN)
const getCurrentWeek = () => {

  const today = new Date();
  const jsDay = today.getDay();

  const monday = new Date(today);
  monday.setDate(today.getDate() - (jsDay === 0 ? 6 : jsDay - 1));

  const week = [];

  for (let i = 0; i < 7; i++) {

    const d = new Date(monday);
    d.setDate(monday.getDate() + i);

    week.push({
      id: i + 1,
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate() + ' ' +
        d.toLocaleDateString('en-US', { month: 'short' }),
    });
  }

  return week;
};


const ArrivalSchedule = ({ navigation }) => {

  const weekDays = getCurrentWeek();
  const [enableDay, setEnableDay] = useState(getTodayId());

  const selectedDay = weekDays.find(d => d.id === enableDay);
  const route = routesByDay?.[enableDay] ?? null;
  const noService = route?.noService === true;


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


      {/* WEEK SELECTOR */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dateRow}>

        {weekDays.map(item => {

          const noRoute = routesByDay?.[item.id]?.noService;

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.dateBox,
                enableDay === item.id && styles.activeDateBox,
                noRoute && styles.noRouteDay
              ]}
              onPress={() => setEnableDay(item.id)}
            >

              <Text style={[
                styles.dayText,
                enableDay === item.id && styles.activeText
              ]}>
                {item.day}
              </Text>

              <Text style={[
                styles.dateText,
                enableDay === item.id && styles.activeText
              ]}>
                {item.date}
              </Text>

            </TouchableOpacity>
          );
        })}

      </ScrollView>


      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.scheduleCard}>

          <Text style={styles.cardTitle}>
            Schedule for {selectedDay?.day}
          </Text>


          {noService ? (

            <View style={styles.noServiceContainer}>
              <Icon name="close-circle-outline" size={50} color="#DC3545" />
              <Text style={styles.noBusTitle}>No Bus Assigned</Text>
              <Text style={styles.noBusSub}>
                Bus service is not available on {selectedDay?.day}
              </Text>
            </View>

          ) : (

            <>
              {/* ROUTE TITLE */}
              <View style={styles.infoRow}>
                <Icon name="navigate-outline" size={20} color="#175812" />
                <Text style={styles.infoText}>
                  {route?.arrival?.title}
                </Text>
              </View>

              {/* ARRIVAL TIME */}
              <View style={styles.infoRow}>
                <Icon name="time-outline" size={20} color="#175812" />
                <Text style={styles.infoText}>
                  Arrival: {route?.arrival?.time}
                </Text>
              </View>

              {/* BUS NO */}
              <View style={styles.infoRow}>
                <Icon name="bus-outline" size={20} color="#175812" />
                <Text style={styles.infoText}>
                  Bus: {route?.arrival?.busNo}
                </Text>
              </View>

              <View style={styles.divider} />

              {/* STOPS */}
              <Text style={styles.subTitle}>Pickup Stops</Text>

              {route?.stops?.map((stop, index) => (
                <View key={index} style={styles.stopRow}>
                  <View style={styles.timeline}>
                    <View style={styles.dot} />
                    {index !== route.stops.length - 1 && (
                      <View style={styles.line} />
                    )}
                  </View>
                  <Text style={styles.stopText}>{stop.name}</Text>
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
