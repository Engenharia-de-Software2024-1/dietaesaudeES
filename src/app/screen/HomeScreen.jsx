import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTasksDatabase } from '../../database/useTasksDatabase';
import { Task } from '../components/Task';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
const HomeScreen = () => {

    const [selectedRadio, setSelectedRadio] = useState('dieta');
    const [tasks, setTasks] = useState([])

    const db = useTasksDatabase()

    async function list(){
        try{
            const response = await db.findAllTasks(selectedRadio)
            setTasks(response)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.routineTitle}>Rotina</Text>
            <View style={styles.routineButtonsContainer}>
                <TouchableOpacity onPress={() => {setSelectedRadio('dieta'); list();}}>
                    <Text style={selectedRadio == 'dieta'? styles.selectedButton : styles.routineButtonText}>Dieta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedRadio('treino'); list();}}>
                    <Text style={selectedRadio == 'treino' ? styles.selectedButton : styles.routineButtonText}>Treino</Text>
                </TouchableOpacity>
            </View>
            <Link href='screen/SetUpScreen'> 
                <AntDesign name='pluscircle' style={styles.addIcon} size={40} color="blue"/>
            </Link>
            <View>
                {tasks.map((item) =>{
                    return <Text>{item.task_type} - {item.quantity}</Text>
                })}
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
    addIcon:{
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 20,
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