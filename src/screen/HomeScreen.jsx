import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const [selectedRadio, setSelectedRadio] = useState(0);


    return (
        <View style={styles.container}>
            <Text style={styles.routineTitle}>Rotina</Text>
            <View style={styles.routineButtonsContainer}>
                <TouchableOpacity onPress={() => setSelectedRadio(0)}>
                    <Text style={selectedRadio == 0 ? styles.selectedButton : styles.routineButtonText}>Dieta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                    <Text style={selectedRadio == 1 ? styles.selectedButton : styles.routineButtonText}>Treino</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F5F5F5",
        flex: 1,
    },
    routineTitle:{
        alignSelf: "center",
        fontSize: 34,
        fontWeight: "500",
        color: "black",
        marginVertical: 15
    },
    routineButtonsContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    routineButtonText:{
        fontSize: 18,
        marginHorizontal: 10,
        color: "black"
    },
    selectedButton:{
        fontSize: 18,
        marginHorizontal: 10,
        color: "blue"
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
        marginTop: 60
    }
});