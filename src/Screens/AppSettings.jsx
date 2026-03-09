import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppSettings = ({navigation}) => {

  const [darkMode,setDarkMode] = useState(false);
  const [notifications,setNotifications] = useState(true);

  useEffect(()=>{
    loadSettings();
  },[]);

  const loadSettings = async () => {
    const dark = await AsyncStorage.getItem('darkMode');
    const notif = await AsyncStorage.getItem('notifications');

    if(dark !== null) setDarkMode(JSON.parse(dark));
    if(notif !== null) setNotifications(JSON.parse(notif));
  }

  const toggleDarkMode = async () =>{
    const value = !darkMode;
    setDarkMode(value);
    await AsyncStorage.setItem('darkMode',JSON.stringify(value));
  }

  const toggleNotifications = async () =>{
    const value = !notifications;
    setNotifications(value);
    await AsyncStorage.setItem('notifications',JSON.stringify(value));
  }

  const clearRecentActivities = async () =>{
    await AsyncStorage.removeItem('recentScreens');
    Alert.alert("Cleared","Recent activities removed");
  }

  const signOut = () =>{
    Alert.alert(
      "Sign Out",
      "Are you sure you want to logout?",
      [
        {text:"Cancel"},
        {
          text:"Logout",
          onPress:()=> navigation.replace('Login')
        }
      ]
    )
  }

  const theme = darkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container,theme.background]}>

      {/* HEADER */}
      <View style={[
          styles.header,
          { backgroundColor: darkMode ? '#0D2E0A' : '#175812' },
        ]}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white"/>
        </TouchableOpacity>

        <Text style={styles.headerText}>App Settings</Text>

        <View style={{width:26}}/>
      </View>

      <ScrollView style={{padding:15}}>

        {/* APPEARANCE */}
        <Text style={[styles.sectionTitle, theme.text]}>Appearance</Text>

        <View style={[styles.card,theme.card]}>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Icon name="moon-outline" size={22} color="#175812"/>
              <Text style={[styles.rowText,theme.text]}>Dark Mode</Text>
            </View>

            <Switch
              value={darkMode}
              onValueChange={toggleDarkMode}
            />
          </View>

        </View>

        {/* NOTIFICATIONS */}
        <Text style={[styles.sectionTitle, theme.text]}>Notifications</Text>

        <View style={[styles.card,theme.card]}>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Icon name="notifications-outline" size={22} color="#175812"/>
              <Text style={[styles.rowText,theme.text]}>Enable Notifications</Text>
            </View>

            <Switch
              value={notifications}
              onValueChange={toggleNotifications}
            />
          </View>

        </View>

        {/* DATA */}
        <Text style={[styles.sectionTitle, theme.text]}>App Data</Text>

        <View style={[styles.card,theme.card]}>

          <TouchableOpacity style={styles.row} onPress={clearRecentActivities}>
            <View style={styles.rowLeft}>
              <Icon name="trash-outline" size={22} color="#175812"/>
              <Text style={[styles.rowText,theme.text]}>Clear Recent Activities</Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* ABOUT */}
        <Text style={[styles.sectionTitle, theme.text]}>About</Text>

        <View style={[styles.card,theme.card]}>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Icon name="information-circle-outline" size={22} color="#175812"/>
              <Text style={[styles.rowText,theme.text]}>Version</Text>
            </View>

            <Text style={theme.text}>1.0</Text>
          </View>

        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutBtn} onPress={signOut}>
          <Icon name="log-out-outline" size={20} color="white"/>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
};

export default AppSettings;

const styles = StyleSheet.create({

container:{
flex:1
},

header:{
flexDirection:'row',
backgroundColor:'#175812',
paddingVertical:16,
paddingHorizontal:18,
alignItems:'center',
justifyContent:'space-between'
},

headerText:{
color:'white',
fontSize:17,
fontWeight:'bold'
},

sectionTitle:{
fontWeight:'bold',
marginBottom:6,
marginTop:20
},

card:{
borderRadius:12,
padding:15,
elevation:2
},

row:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingVertical:10
},

rowLeft:{
flexDirection:'row',
alignItems:'center',
gap:10
},

rowText:{
fontSize:15
},

logoutBtn:{
marginTop:40,
backgroundColor:'#d9534f',
height:45,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
gap:8
},

logoutText:{
color:'white',
fontWeight:'bold'
}

});

const lightStyles = StyleSheet.create({

background:{
backgroundColor:'#F5F7F6'
},

card:{
backgroundColor:'white'
},

text:{
color:'black'
}

});

const darkStyles = StyleSheet.create({

background:{
backgroundColor:'#1E1E1E'
},

card:{
backgroundColor:'#2B2B2B'
},

text:{
color:'white'
}

});