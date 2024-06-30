import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import TaskOptions from '../components/HomeScreen/TaskOptions';
import { useTasksDatabase } from '../../database/useTasksDatabase';
import TaskComponent from '../components/CalendarScreen/taskComponent';

export default function TrainingScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTaskOption, setSelectedTaskOption] = useState('dieta')
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

  
  async function list(){
    try{
        const response = await db.findEachTask(selectedTaskOption,selectedDate.toString())
        setTasks(response)
    }catch(error){
        console.log(error)
    }
  }
  async function remove(id){
    try{
      await db.remove(id)
      list()
    }catch(error){
        console.log(error)
    }
  }

    useEffect(() => {
    list();
  }, [selectedDate, selectedTaskOption]);

  return (
    <View style={{ flex: 1 }}>
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
      <TaskOptions selected={selectedTaskOption} setSelected={setSelectedTaskOption} list={list}/>
      
      {tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>Não há atividades nesse dia</Text>
        </View>
      ) : (
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskComponent taskDate={item.task_date} taskType={item.task_type} onDelete={()=> remove(item.id)}/>
            )}
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
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tasksContainer:{
    marginVertical: 10
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
