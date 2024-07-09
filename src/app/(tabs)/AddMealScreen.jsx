import React, { useState } from 'react';
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

  async function createMeal(){
    Alert.alert('Refeição adicionada')
    const currentDate = getCurrentDate();
    const response = await db.createMeal({
      daytime: selectedMeal,
      date: currentDate})
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Detalhes da Refeição</Text>
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
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
    backgroundColor: '#e6e6e6',
  },
  selectedButton: {
    backgroundColor: '#b3ffd9', // Verde claro
  },
  selectionButtonText: {
    color: '#000',
  },
  textInput: {
    backgroundColor: '#b3ffd9',
    padding: 8,
    borderRadius: 4,
    marginVertical: 16,
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#00b300', // Verde escuro
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