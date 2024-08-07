import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTasksDatabase } from '../../database/useTasksDatabase';

const AddMealScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState([]);

  const meals = ['Café da Manhã', 'Almoço', 'Jantar', 'Lanche', 'Ceia'];

  const db = useTasksDatabase();

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }  

  async function createMeal() {
    Alert.alert('Refeição adicionada');
    const currentDate = getCurrentDate();
    const response = await db.createMeal({
      daytime: selectedMeal,
      date: currentDate
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperMargin}></View>
      <View style={styles.topbar}>
        <Icon name="notifications-outline" size={24} color="#fff" />
        <Text style={styles.topbarText}>Detalhes da Refeição</Text>
        <Icon name="ellipsis-vertical-outline" size={24} color="#fff" />
      </View>
      <Text></Text>
      <Text style={styles.label}>Horário da Refeição:</Text>
      <View style={styles.selectionContainer}>
        {meals.map((meal) => (
          <TouchableOpacity
            key={meal}
            style={[
              styles.selectionButton,
              selectedMeal.includes(meal) && styles.selectedButton
            ]}
            onPress={() => setSelectedMeal(meal)}
          >
            <Text style={styles.selectionButtonText}>{meal}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput style={styles.textInput} placeholder="Outro:" />
      <TouchableOpacity style={styles.saveButton} onPress={createMeal}>
        <Text style={styles.saveButtonText}>SALVAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: 60,
    backgroundColor: '#3c3c3c', // Cinza Muito Escuro
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginHorizontal: -16,
  },
  topbarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  upperMargin: {
    height: 19, // Margem superior
  },
  label: {
    fontSize: 18,
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
    backgroundColor: '#aaa', //Cinza escuro
  },
  selectedButton: {
    backgroundColor: '#1e90ff', // Azul
  },
  selectionButtonText: {
    color: '#000',
  },
  textInput: {
    backgroundColor: '#e6e6e6', //Cinza Claro
    padding: 8,
    borderRadius: 4,
    marginVertical: 16,
    flex: 1,
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

export default AddMealScreen;
