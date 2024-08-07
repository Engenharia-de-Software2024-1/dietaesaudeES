import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTasksDatabase } from '../../database/useTasksDatabase';

export default function AddActivityScreen() {
  const [selectedTab, setSelectedTab] = useState('workouts');
  const [days, setDays] = useState([]);
  const [timesPerDay, setTimesPerDay] = useState(1);
  const [notification, setNotification] = useState(false);

  const db = useTasksDatabase();

  const handleDayPress = (day) => {
    setDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const handleIncrement = () => {
    setTimesPerDay((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setTimesPerDay((prev) => (prev > 1 ? prev - 1 : 1));
  };

  async function createGoal(){
    Alert.alert('Meta criada')
    days.map(async (day)=>{
      console.log(`${day} -- ${timesPerDay}`)
      await db.createGoal({day: day, value:timesPerDay, goal_type: selectedTab})
    })
  }
  async function showGoal(){
    days.map(async (day)=>{
      const response = await db.findGoals(selectedTab)
      console.log(response)
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.upperMargin}></View>
      <View style={styles.header}>
        <Icon name="notifications-outline" size={24} color="#fff" />
        <Text style={styles.headerText}>Adicionar Meta</Text>
        <Icon name="ellipsis-vertical-outline" size={24} color="#fff" />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.toggleButtons}>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'workouts' && styles.selectedTab]}
            onPress={() => setSelectedTab('workouts')}
          >
            <Text style={styles.toggleButtonText}>Treino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'meals' && styles.selectedTab]}
            onPress={() => {setSelectedTab('meals'),showGoal()} }
          >
            <Text style={styles.toggleButtonText}>Dieta</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Observações"
          multiline
          numberOfLines={4}
        />
        <Text style={styles.label}>Em quais dias da semana?</Text>
        <View style={styles.daysContainer}>
          {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'].map((day) => (
            <TouchableOpacity
              key={day}
              style={[styles.dayButton, days.includes(day) && styles.selectedDay]}
              onPress={() => handleDayPress(day)}
            >
              <Text style={styles.dayButtonText}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Quantas vezes ao dia?</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={handleDecrement} style={styles.counterButton}>
            <Text style={styles.counterButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{timesPerDay}</Text>
          <TouchableOpacity onPress={handleIncrement} style={styles.counterButton}>
            <Text style={styles.counterButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.label}>Agendar notificação</Text>
          <Switch
            value={notification}
            onValueChange={setNotification}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={createGoal}>
          <Text style={styles.saveButtonText}>SALVAR</Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  icon: {
    color: '#fff',
  },
  container: {
    padding: 15,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#aaa', // Cinza escuro
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: '#1e90ff', // Azul
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderColor: '#aaa', // Cinza escuro
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#e6e6e6', // Cinza Claro
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    backgroundColor: '#aaa', // Cinza escuro
    borderRadius: 5,
  },
  selectedDay: {
    backgroundColor: '#1e90ff', // Azul
  },
  dayButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff', // Azul
    borderRadius: 5,
  },
  counterButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#1e90ff', // Azul
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
