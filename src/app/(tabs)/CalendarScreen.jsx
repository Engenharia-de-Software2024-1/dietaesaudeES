import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import TaskOptions from '../components/HomeScreen/TaskOptions';
import { useTasksDatabase } from '../../database/useTasksDatabase';
import WorkoutComponent from '../components/CalendarScreen/WorkoutComponent';
import MealComponent from '../components/CalendarScreen/MealComponent';

export default function TrainingScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTaskOption, setSelectedTaskOption] = useState('meals')
  const [tasks, setTasks] = useState([])

  const db = useTasksDatabase();

  LocaleConfig.locales['pt'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'pt';

  const renderTaskComponent = ({ item }) => {
    if (selectedTaskOption === 'meals') {
      return <MealComponent taskDate={item.date} taskDaytime={item.daytime} onDelete={() => remove(item.id)} />;
    } else {
      return <WorkoutComponent taskDate={item.date} taskType={item.workout_type} taskDaytime={item.daytime} onDelete={() => remove(item.id)} />;
    }
  };


  async function list(){
    try{
        var response;
        if(selectedTaskOption == 'meals'){
          response = await db.findEachMeal(selectedDate.toString())
        }else{
          response = await db.findEachWorkout(selectedDate.toString())
        }
        setTasks(response)
    }catch(error){
        console.log(error)
    }
  }
  async function remove(id){
    try{
      await db.remove(id,selectedTaskOption)
      list()
    }catch(error){
        console.log(error)
    }
  }

    useEffect(() => {
    list();
  }, [selectedTaskOption, selectedDate]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.upperMargin}></View>
      <View style={styles.header}>
        <Icon name="notifications-outline" size={24} color="#fff" />
        <Text style={styles.headerText}>Calendário</Text>
        <Icon name="ellipsis-vertical-outline" size={24} color="#fff" />
      </View>
      <Calendar
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        firstDay={1}
        locale={'pt-br'}
        theme={{
          todayTextColor: '#00adf5',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
      <TaskOptions selected={selectedTaskOption} setSelected={setSelectedTaskOption}/>
      
      {tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>Não há atividades nesse dia</Text>
        </View>
      ) : (
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={renderTaskComponent}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#3c3c3c', // Cinza Muito Escuro
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  upperMargin: {
    height: 35, // Margem superior
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tasksContainer:{
    flex: 1,
    backgroundColor: "#ffff"
  },
  noTasksContainer:{
    marginVertical: 20,
    alignItems: "center"
  },
  noTasksText:{
    fontSize: 16,
    fontWeight: "500"
  }
});
