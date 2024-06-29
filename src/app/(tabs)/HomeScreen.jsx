import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTasksDatabase } from '../../database/useTasksDatabase';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import HomeChart from '../components/HomeScreen/HomeChart';
import ChartFilters from '../components/HomeScreen/ChartFilters';
import TaskOptions from '../components/HomeScreen/TaskOptions';

const HomeScreen = () => {

    const month = () => {
        const date = new Date();
        let month = (date.getMonth() + 1).toString();
        if (month.length < 2) {
          month = '0' + month;
        }
        return month;
      };
    
    const [selectedRadio, setSelectedRadio] = useState('dieta');
    const [dayValue, setDayValue] = useState(null);
    const [monthValue, setMonthValue] = useState(month);
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

            <TaskOptions 
            selected={selectedRadio} 
            setSelected={setSelectedRadio} 
            onPress={list}/>

            <View style={styles.addTaskContainer}>
                <Link href='SetUpScreen'> 
                    <AntDesign name='pluscircle' style={styles.addIcon}/>
                </Link>
                <Text style={styles.addTaskText}>Adicionar atividade / Criar uma meta</Text>
            </View>

            <ChartFilters dayValue={dayValue} monthValue={monthValue} yearValue={yearValue} 
                         setDay={setDayValue} setMonth={setMonthValue} setYear={setYearValue}/>

            <View style={styles.chartContainer}>
                <HomeChart 
                selectedFilter={selectedRadio} 
                taskDay={dayValue} taskMonth={monthValue} 
                style={styles.chart}/>
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
    addTaskContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    addTaskText:{
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 10,

    },
    addIcon:{
        fontSize: 40,
        color: "#3d5a80"
    },
    chartContainer:{
        backgroundColor: '#999999',
        borderRadius: 10,
        padding: 15,
        margin: 20,
    },
});