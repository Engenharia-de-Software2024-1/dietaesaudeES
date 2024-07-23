import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTasksDatabase } from '../../database/useTasksDatabase';

const AddActivityScreen = () => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState([]);

  const times = ['Manhã', 'Tarde', 'Noite'];
  const activities = ['Cardio', 'Treino de Força', 'Corrida', 'Ciclismo', 'Natação', 'Pilates', 'Luta'];

  const db = useTasksDatabase();

  const selectItem = (item, setItem) => {
    setItem(item);
  };

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async function createWorkout() {
    Alert.alert('Treino adicionado');
    const currentDate = getCurrentDate();
    await db.createWorkout({
      date: currentDate,
      workout_type: selectedActivity,
      daytime: selectedTime,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperMargin}></View>
      <Text style={styles.title}>Detalhes da Atividade</Text>
      <Text style={styles.label}>Horário da Atividade:</Text>
      <View style={styles.selectionContainer}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.selectionButton,
              selectedTime.includes(time) && styles.selectedButton,
            ]}
            onPress={() => selectItem(time, setSelectedTime)}
          >
            <Text style={styles.selectionButtonText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput style={styles.textInput} placeholder="Outro:" />
      <Text style={styles.label}>Tipo da Atividade:</Text>
      <View style={styles.selectionContainer}>
        {activities.map((activity) => (
          <TouchableOpacity
            key={activity}
            style={[
              styles.selectionButton,
              selectedActivity.includes(activity) && styles.selectedButton,
            ]}
            onPress={() => selectItem(activity, setSelectedActivity)}
          >
            <Text style={styles.selectionButtonText}>{activity}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput style={[styles.textInput, styles.textInputSpacing]} placeholder="Outro:" />
      <TouchableOpacity style={styles.saveButton} onPress={createWorkout}>
        <Text style={styles.saveButtonText}>SALVAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  upperMargin: {
    height: 40, // Margem superior
  },
  backButton: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerButton: {
    flex: 1,
    backgroundColor: '#4faaff',
    padding: 16,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  dietButton: {
    backgroundColor: '#00b300',
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  selectionButton: {
    padding: 10,
    margin: 4,
    borderRadius: 4,
    backgroundColor: '#aaa', // Cinza escuro
  },
  selectedButton: {
    backgroundColor: '#1e90ff', // Azul
  },
  selectionButtonText: {
    color: '#000',
  },
  textInput: {
    backgroundColor: '#e6e6e6', // Cinza Claro
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
    flex: 1,
  },
  textInputSpacing: {
    marginBottom: 16, // Espaçamento
  },
  saveButton: {
    backgroundColor: '#1e90ff', // Azul
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddActivityScreen;
