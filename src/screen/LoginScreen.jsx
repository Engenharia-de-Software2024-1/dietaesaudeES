import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const handleRegister = () =>{
        navigation.navigate("Signup")
    }


  return (
    <View style={styles.container}>
        <View style={styles.topImageContainer}>
            <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
        </View>
        <View style={styles.helloContainer}>
            <Image style={styles.brandImage} source={require("../assets/flex.png")}/>
        </View>
        <View>
            <Text style={styles.loginText}>Acesse sua conta</Text>
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Email'/>
        </View>
        <View style={styles.inputContainer}>
            <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon}/>
            <TextInput style={styles.textInput} placeholder='Senha' secureTextEntry/>
        </View>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        <View style={styles.loginButtonContainer}>
            <Text style={styles.loginButtonText}>Entrar</Text>
            <LinearGradient
            colors={["#83B4FF", "#623AA2"]}
            style={styles.linearGradient}>
            <AntDesign name={"arrowright"} size={24} color={"white"}/>
        </LinearGradient>
        </View>
        <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registerText}>Não tem uma conta? 
                <Text style={{textDecorationLine: "underline"}}>Crie uma</Text>
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F5F5F5",
        flex: 1,
    },
    topImageContainer:{
    },
    topImage:{
        width: "100%",
        height: 130,
    },
    brandImage:{
        width: 250,
        height: 150,
        alignSelf: "center",
        marginVertical: 20
    },
    helloText:{
        textAlign: "center",
        fontSize: 70,
        fontWeight: "500",
        color: "#262626"
    },
    loginText:{
        textAlign: "center",
        fontSize: 18,
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
        marginTop: 30,
        width: "92%",
        justifyContent: "flex-end",
        elevation: 10
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
        marginTop: 60
    }
});