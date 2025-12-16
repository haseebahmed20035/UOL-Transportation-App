import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={{padding:27}}>
        <View style={styles.Body}>
            <Image source={require('../Images/logo.png')} style={{width:200, resizeMode:"contain", alignSelf:"center"}}/>
            <Text style={styles.mainHeading}>UOL Transportation App</Text>
            <Text style={styles.subHeading}>Enter your details to log in your account</Text>
            <View style={{gap:12, paddingHorizontal:10}}>
                <View style={styles.textBox}>
                <TextInput
                placeholder="Username"/>
                </View>
                <View style={styles.textBox}>
                <TextInput
                placeholder="Password"
                secureTextEntry/>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginBtn}>
                <Text style={styles.LoginBtnText}>Login</Text>
            </TouchableOpacity>
            <Text style={{marginTop:35, alignSelf:"center", marginBottom:30}}>Or login using your account</Text>
            <TouchableOpacity>
            <Image source={require('../Images/google.png')} style={{resizeMode:"contain", alignSelf:"center", height:25, width:25}}/>
           </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainHeading: {
        color:"#113d1ece",
        textAlign: 'center',
        fontSize:25,
        fontWeight:"bold"
    },
    Body: {
        backgroundColor:"white",
        elevation:2,
        minHeight: 700,
        padding:10,
        borderRadius:10
    },
    subHeading: {
        textAlign: 'center',
        marginTop:15,
        color:"#113d1eef",
        marginBottom:40,
    },
    textBox:{
        borderWidth:1,
        borderColor:"lightgray",
        minHeight: 48,
        justifyContent: "center",
        borderRadius:2
    },
    forgotText: {
        fontSize:12,
        marginTop:15,
        color:"blue",
        fontWeight:500,
        alignSelf:"flex-end",
        marginRight:10
    },
    LoginBtn: {
        marginTop:20,
        backgroundColor:"#113d1eef",
        width:"90%",
        alignSelf:"center",
        height:48,
        borderRadius:10,
        justifyContent:"center"
    },
    LoginBtnText: {
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20
    }
})