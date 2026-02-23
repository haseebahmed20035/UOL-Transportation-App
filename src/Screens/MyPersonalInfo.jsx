import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MyPersonalInfo = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Personal Information</Text>
        <View style={{ width: 26 }} />
      </View>
    <View style={{padding:20}}>
        <View style={styles.body}>
            <Text style={{fontWeight:"bold", fontSize:17}}>Full Name</Text>
            <Text>Haseeb Ahmed</Text>
            <Text style={{fontWeight:"100", marginVertical:-10}}>_______________________________________________________</Text>
            <Text style={{fontWeight:"bold", fontSize:17, marginTop:10}}>Registration No</Text>
            <Text>70135821</Text>
             <Text style={{fontWeight:"100", marginVertical:-10}}>_______________________________________________________</Text>
            <Text style={{fontWeight:"bold", fontSize:17, marginTop:10}}>Email Address</Text>
            <Text>70135821@student.uol.edu.pk</Text>
             <Text style={{fontWeight:"100", marginVertical:-10}}>_______________________________________________________</Text>
            <Text style={{fontWeight:"bold", fontSize:17, marginTop:10}}>Your Route</Text>
            <Text></Text>
        </View>
    </View>
    </View>
  );
};

export default MyPersonalInfo;

const styles = StyleSheet.create({
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
  body: {
    padding:10,
    backgroundColor:"white",
    borderRadius:10,
    gap:5
  }
});
