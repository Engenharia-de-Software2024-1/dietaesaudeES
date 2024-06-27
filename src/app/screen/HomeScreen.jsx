import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTasksDatabase } from '../../database/useTasksDatabase';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import HomeChart from '../components/HomeChart';
import HomeFilters from '../components/HomeFIlters';
const HomeScreen = () => {

    const [selectedRadio, setSelectedRadio] = useState('dieta');
    const [dayValue, setDayValue] = useState(null);
    const [monthValue, setMonthValue] = useState(null);
    const [yearValue, setYearValue] = useState(null);

    const db = useTasksDatabase()

    async function list(){
        try{
            const response = await db.findAllTasks(selectedRadio)
            console.log([dayValue, monthValue,yearValue])
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
            <Link href='screen/SetUpScreen' style={styles.addTaskContainer}> 
                <AntDesign name='pluscircle' style={styles.addIcon} size={40} color="blue"/>
            </Link>
            <HomeFilters dayValue={dayValue} monthValue={monthValue} yearValue={yearValue} 
                         setDay={setDayValue} setMonth={setMonthValue} setYear={setYearValue}/>
            <View style={styles.chartContainer}>
                <HomeChart selectedFilter={selectedRadio} taskDay={dayValue} taskMonth={monthValue} style={styles.chart}/>
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
        marginTop: 50,
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
    addTaskContainer:{
        alignItems: "flex-end",
        margin: 10
    },
    addIcon:{
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
    chartContainer:{
        backgroundColor: '#999999',
        borderRadius: 10,
        padding: 15,
        margin: 20,
    },
});