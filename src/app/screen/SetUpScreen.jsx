import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Switch, ScrollView, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useTasksDatabase } from '../../database/useTasksDatabase';
import { Link } from 'expo-router';


export default Page = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [activityCount, setActivityCount] = useState(1);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationTimes, setNotificationTimes] = useState([]);
  const [taskType, setTaskType] = useState('treino')
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  // funcoes do banco
  const db = useTasksDatabase();

  async function create(){

    try{

      const response = await db.create({
        task_type: taskType, 
        task_date: new Date().toLocaleDateString()
      })

      Alert.alert('Produto: ' + response.insertedRowId + 'adicionado')
    }catch(error){console.log(error)}
  }

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addNotificationTime = () => {
    setNotificationTimes([...notificationTimes, '']);
  };

  return (
    <ScrollView style={styles.container}>
      <Link href='screen/HomeScreen' style={styles.backButton}> 
       Voltar
      </Link>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={taskType == 'treino' ? styles.selectedTaskTypeButton : styles.taskTypeButton} onPress={() => {setTaskType('treino')
        }}>
          <Text>Treino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={taskType == 'dieta' ? styles.selectedTaskTypeButton : styles.taskTypeButton} onPress={() => setTaskType('dieta')}>
          <Text>Dieta</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="Observações:"
        multiline={true}
      />
      <Text style={styles.label}>Quais dias da semana você pretende treinar?</Text>
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.selectedDayButton
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text style={styles.dayButtonText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Quantas vezes ao dia a atividade será realizada?</Text>
      <View style={styles.counterContainer}>
        <Button title="-" onPress={() => setActivityCount(activityCount > 1 ? activityCount - 1 : 1)} />
        <Text style={styles.counterText}>{activityCount}</Text>
        <Button title="+" onPress={() => setActivityCount(activityCount + 1)} />
      </View>
      <View style={styles.notificationContainer}>
        <Text>Agendar notificação</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      {notificationsEnabled && (
        <>
          <Text style={styles.label}>Selecione os horários da notificação/alarme</Text>
          {notificationTimes.map((_, index) => (
            <TextInput
              key={index}
              style={styles.notificationInput}
              placeholder="Horário"
            />
          ))}
          <Button title="+ Adicionar" onPress={addNotificationTime} />
        </>
      )}
      <Button title="SALVAR" onPress={create} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  backButton: {
    marginVertical: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  taskTypeButton: {
    flex: 1,
    backgroundColor: '#d3bce3',
    padding: 16,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedTaskTypeButton: {
    flex: 1,
    backgroundColor: '#4faaff',
    padding: 16,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  textArea: {
    backgroundColor: '#e6ccf2',
    padding: 16,
    borderRadius: 8,
    height: 100,
    marginBottom: 16,
  },
  label: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  dayButton: {
    padding: 10,
    margin: 4,
    borderRadius: 4,
    backgroundColor: '#e6e6e6',
  },
  selectedDayButton: {
    backgroundColor: '#4faaff',
  },
  dayButtonText: {
    color: '#000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterText: {
    marginHorizontal: 16,
    fontSize: 18,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  notificationInput: {
    backgroundColor: '#e6ccf2',
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
  },
});
