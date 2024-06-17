import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';
const SignupScreen = () => {


  return (
    <View>
        <View>
            <Text style={styles.signupText}>Crie sua conta</Text>
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome name={"user"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Nome'/>
        </View>
        <View style={styles.inputContainer}>
            <Zocial name={"email"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Email'/>
        </View>
        <View style={styles.inputContainer}>
            <Fontisto name={"locked"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Senha' secureTextEntry/>
        </View>
        <View style={styles.inputContainer}>
            <Fontisto name={"locked"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Repita a senha' secureTextEntry/>
        </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    topImageContainer:{
    },
    topImage:{
        width: "100%",
        height: 130,
    },
    helloText:{
        textAlign: "center",
        fontSize: 70,
        fontWeight: "500",
        color: "#262626"
    },
    signupText:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "500",
        color: "#262626"
    },
    inputContainer:{
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        height: 40
    },
    inputIcon:{
        marginLeft: 15,
        marginRight: 5
    },
    textInput:{
        flex: 1
    },
    forgotPassword:{
        color: "#262626",
        textAlign: "right",
        width:"90%",
        fontSize: 15
    },
    loginButtonContainer:{
        flexDirection: "row",
        marginTop: 100,
        width: "92%",
        justifyContent: "flex-end"
    },
    loginButtonText:{
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold"
    },
    linearGradient:{
        height: 34,
        width:56,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    registerText:{
        color: "#262626",
        textAlign: "center",
        fontSize: 18,
        marginTop: 60
    }
});