import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AddActivityScreen = () => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState([]);

  const times = ['Manhã', 'Tarde', 'Noite'];
  const activities = ['Cardio', 'Treino de Força', 'Corrida', 'Ciclismo', 'Natação', 'Pilates'];

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
      <Text style={styles.title}>Detalhes da Atividade</Text>
      <Text style={styles.label}>Horário da Atividade:</Text>
      <View style={styles.selectionContainer}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.selectionButton,
              selectedTime.includes(time) && styles.selectedButton
            ]}
            onPress={() => toggleSelection(time, selectedTime, setSelectedTime)}
          >
            <Text style={styles.selectionButtonText}>{time}</Text>
          </TouchableOpacity>
        ))}
        <TextInput style={styles.textInput} placeholder="Outro:" />
      </View>
      <Text style={styles.label}>Tipo da Atividade:</Text>
      <View style={styles.selectionContainer}>
        {activities.map((activity) => (
          <TouchableOpacity
            key={activity}
            style={[
              styles.selectionButton,
              selectedActivity.includes(activity) && styles.selectedButton
            ]}
            onPress={() => toggleSelection(activity, selectedActivity, setSelectedActivity)}
          >
            <Text style={styles.selectionButtonText}>{activity}</Text>
          </TouchableOpacity>
        ))}
        <TextInput style={styles.textInput} placeholder="Outro:" />
      </View>
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
    backgroundColor: '#4faaff',
  },
  selectionButtonText: {
    color: '#000',
  },
  textInput: {
    backgroundColor: '#b3d9ff', // Azul claro
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#4faaff',
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