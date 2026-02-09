import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const LiveBusTracking = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Live Bus Tracking</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <Text style={styles.routeTitle}>UOL → Johar Town</Text>

        {/* Bus Number Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Bus No: UOL-07</Text>
        </View>

        {/* Arrival Time */}
        <View style={styles.arrivalRow}>
          <Icon name="time-outline" size={18} color="#175812" />
          <Text style={styles.arrivalText}>Arrives in: 12 mins</Text>
        </View>
      </View>

      {/* MAP PLACEHOLDER */}
      <View style={styles.mapContainer}>
        <Text style={{ color: "#777" }}>
          Google Map will appear here...
        </Text>
      </View>

      {/* Floating Navigation Button */}
      <TouchableOpacity style={styles.floatingBtn}>
        <Icon name="navigate-outline" size={24} color="white" />
      </TouchableOpacity>

    </View>
  );
};

export default LiveBusTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F6",
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
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  }, 

  /* ROUTE CARD */
  routeCard: {
    backgroundColor: "white",
    margin: 14,
    padding: 14,
    borderRadius: 12,
    elevation: 3,
  },

  routeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F2F1B",
    marginBottom: 8,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#DFFFE0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },

  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#175812",
  },

  arrivalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  arrivalText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#175812",
  },

  /* MAP AREA */
  mapContainer: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    marginHorizontal: 14,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  /* FLOATING BUTTON */
  floatingBtn: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#175812",
    height: 55,
    width: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
