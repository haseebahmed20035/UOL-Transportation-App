import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={28} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image
            source={require('../Images/uol.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>UOL Transportation</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="help-circle-outline" size={26} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="notifications-outline" size={26} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>H</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ROUTE INFORMATION */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Route Information</Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <Icon name="navigate-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>My Route</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="map-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>All Routes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="calendar-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>Bus Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="bus-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>Live Bus Tracking</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="swap-horizontal-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>Change Route</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="document-text-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>Request Transport</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PERSONAL DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Details</Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <Icon name="person-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>My Personal Information</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="receipt-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>Fee Voucher</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* APP SETTINGS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>App Settings</Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <Icon name="settings-outline" size={26} color="#0F2F1B" />
              <Text style={styles.boxText}>App Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <Icon name="help-circle-outline" size={30} color="#0F2F1B" />
              <Text style={styles.boxText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

/* ======================= STYLES ======================= */

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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  logo: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontWeight: 'bold',
    color: '#175812',
  },

  /* CONTENT */
  scrollContainer: {
    padding: 12,
  },

  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#175812',
  },

  /* GRID */
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box: {
    width: '48%',
    backgroundColor: '#7FAF8A',
    borderColor: 'rgba(26,128,63,0.5)',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  
  boxText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F2F1B',
    textAlign: 'center',
  },
});
