import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupScreen = () => {


  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.signupText}>Informe suas medidas</Text>
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome5 name={"weight-hanging"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='peso'/>
        </View>
        <View style={styles.inputContainer}>
            <MaterialCommunityIcons name={"human-male-height"} size={20} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='altura'/>
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome5 name={"ruler-horizontal"} size={17} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Circuferência da cintura' secureTextEntry/>
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome5 name={"ruler-horizontal"} size={17} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Circuferência do pescoço' secureTextEntry/>
        </View>
        <View style={styles.loginButtonContainer}>
                <TouchableOpacity>
                    <Text style={styles.loginButtonText}>Finalizar cadastro</Text>
                </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
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
        marginTop: 20,
        padding: 10,
        elevation: 10,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: "#937EFF",
        borderRadius: 20,
        width: 200
    },
    loginButtonText:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500"
    },
    linearGradient:{
        height: 50,
        width: 200,
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