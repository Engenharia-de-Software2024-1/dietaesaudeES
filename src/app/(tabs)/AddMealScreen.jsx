import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AddMealScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState([]);

  const meals = ['Café da Manhã', 'Almoço', 'Jantar', 'Lanche', 'Ceia'];

  const toggleSelection = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

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
            onPress={() => toggleSelection(meal, selectedMeal, setSelectedMeal)}
          >
            <Text style={styles.selectionButtonText}>{meal}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput style={styles.textInput} placeholder="Outro:" />
      <TouchableOpacity style={styles.saveButton}>
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