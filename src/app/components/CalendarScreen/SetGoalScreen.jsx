import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Switch } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AddActivityScreen() {
  const [selectedTab, setSelectedTab] = useState('Treino');
  const [days, setDays] = useState([]);
  const [timesPerDay, setTimesPerDay] = useState(1);
  const [notification, setNotification] = useState(false);

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

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.headerText}>Adicionar Atividade</Text>
        <MaterialIcons name="more-vert" size={24} color="#fff" style={styles.icon} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.toggleButtons}>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'Treino' && styles.selectedTab]}
            onPress={() => setSelectedTab('Treino')}
          >
            <Text style={styles.toggleButtonText}>Treino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'Dieta' && styles.selectedTab]}
            onPress={() => setSelectedTab('Dieta')}
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
        <Text style={styles.label}>Quais dias da semana você pretende treinar?</Text>
        <View style={styles.daysContainer}>
          {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map((day) => (
            <TouchableOpacity
              key={day}
              style={[styles.dayButton, days.includes(day) && styles.selectedDay]}
              onPress={() => handleDayPress(day)}
            >
              <Text style={styles.dayButtonText}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Quantas vezes ao dia a atividade será realizada?</Text>
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
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SALVAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
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
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: 'blue',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
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
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  selectedDay: {
    backgroundColor: 'blue',
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
    backgroundColor: 'blue',
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
    backgroundColor: 'blue',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
