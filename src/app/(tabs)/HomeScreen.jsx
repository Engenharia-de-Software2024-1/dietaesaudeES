import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useCallback} from 'react'
import { useTasksDatabase } from '../../database/useTasksDatabase';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useFocusEffect } from 'expo-router';
import HomeChart from '../components/HomeScreen/HomeChart';
import ChartFilters from '../components/HomeScreen/ChartFilters';
import TaskOptions from '../components/HomeScreen/TaskOptions';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    
    const [selectedRadio, setSelectedRadio] = useState('meals');
    const [dayStart, setDayStart] = useState(null);
    const [dayEnd, setDayEnd] = useState(null);
    const [monthStart, setMonthStart] = useState(null);
    const [monthEnd, setMonthEnd] = useState(null);
    const [yearStart, setYearStart] = useState(null);
    const [yearEnd, setYearEnd] = useState(null);
    
    useFocusEffect(
        useCallback(() => {
            // This function will run when the screen is focused
            // Trigger any side effects or state updates here
            // You can also call your effect hook here if you need
            console.log('HomeScreen is focused');
        }, [])
    );


    useEffect(() => {
      }, [selectedRadio, useFocusEffect]);

    return (
        <View style={styles.container}>
            <Text style={styles.routineTitle}>Rotina</Text>
            <View style={styles.options}>
            <TaskOptions
            selected={selectedRadio} 
            setSelected={setSelectedRadio} />
            </View>

            <ChartFilters dayStart={dayStart} setDayStart={setDayStart} dayEnd={dayEnd} setDayEnd={setDayEnd}
                          monthStart={monthStart} setMonthStart={setMonthStart} monthEnd={monthEnd} setMonthEnd={setMonthEnd} 
                          yearStart={yearStart} setYearStart={setYearStart} yearEnd={yearEnd} setYearEnd={setYearEnd}/>

            <View style={styles.chartContainer}>
                <HomeChart
                selectedFilter={selectedRadio} 
                dayStart={dayStart} setDayStart={setDayStart} dayEnd={dayEnd} setDayEnd={setDayEnd}
                monthStart={monthStart} setMonthStart={monthStart} monthEnd={monthEnd} setMonthEnd={setMonthEnd} 
                yearStart={yearStart} setYearStart={setYearStart} yearEnd={yearEnd} setYearEnd={setYearEnd}
                style={styles.chart}/>
                <View style={styles.legendContainer}>
                    <View style={styles.legendContent}>
                        <FontAwesome name="square" color="#ff5252"  style={{marginRight: 5}}/>
                        <Text>Atividade</Text>
                    </View>
                    <View style={styles.legendContent}>
                        <FontAwesome name="square" color="#5252ff" style={{marginRight: 5}}/>
                        <Text>Meta</Text>
                    </View>
                </View>
            </View>

            <View style={styles.addTaskContainer}>
                <Link href='SetGoalScreen'> 
                    <AntDesign name='pluscircle' style={styles.addIcon}/>
                </Link>
                <Text style={styles.addTaskText}>Criar uma meta</Text>
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
        justifyContent: "flex-start",
        marginLeft: 20,
        marginVertical: 10
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
    legendContainer:{
        margin: 10
    },
    legendContent:{
        flexDirection: "row",
        alignItems: "center"
    },
    options:{
        marginVertical: 20
    }
});