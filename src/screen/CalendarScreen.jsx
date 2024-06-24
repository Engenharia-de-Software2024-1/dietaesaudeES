import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const initialMonthData = {
  '2024-05-01': [{ notes: 'T', color: '#FF6347' }],
  '2024-05-02': [{ notes: 'D', color: '#32CD32' }],
  '2024-05-03': [{ notes: 'C', color: '#1E90FF' }],
  '2024-05-04': [{ notes: 'X', color: '#FFD700' }],
  // Alterar variavel para adicionar informacoes depois
};

const MyCalendarApp = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewType, setViewType] = useState('treino'); 
  const [currentMonth, setCurrentMonth] = useState(newDate().getMonth()); 
  const [currentYear, setCurrentYear] = useState(newDate().getFullYear());
  const [monthData, setMonthData] = useState(initialMonthData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleDatePress = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const renderDay = (date) => {
    const dayData = monthData[date] || [];
    return (
      <TouchableOpacity key={date} style={styles.day} onPress={() => handleDatePress(date)}>
        <Text style={styles.dayText}>{new Date(date).getDate()}</Text>
        {dayData.map((task, index) => (
          <Text key={index} style={{ ...styles.dayNotes, backgroundColor: task.color }}>{task.notes}</Text>
        ))}
      </TouchableOpacity>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
    const startDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); 
    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<View key={`empty-${i}`} style={styles.day} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      days.push(renderDay(date));
    }
    return days;
  };

  const saveTask = () => {
    setMonthData((prevData) => ({
      ...prevData,
      [selectedDate]: [...(prevData[selectedDate] || []), { notes: taskText, color: '#FFD700' }],
    }));
    setIsModalVisible(false);
    setTaskText('');
  };

  const renderSelectedDateDetails = () => {
    const dayData = monthData[selectedDate] || [];
    return (
      <View style={styles.details}>
        <Text style={styles.detailsText}>Detalhes para {selectedDate}</Text>
        {dayData.map((task, index) => (
          <Text key={index} style={styles.detailsText}>Notas: {task.notes}</Text>
        ))}
      </View>
    );
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Text style={styles.navbarTitle}>Calendário</Text>
        <Ionicons name="menu-outline" size={24} color="white" />
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.menuItem, viewType === 'treino' && styles.selectedMenuItem]}
          onPress={() => setViewType('treino')}
        >
          <Text style={styles.menuText}>Treino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, viewType === 'dieta' && styles.selectedMenuItem]}
          onPress={() => setViewType('dieta')}
        >
          <Text style={styles.menuText}>Dieta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarNav}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.navText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.navText}>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.navText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendar}>{renderCalendar()}</View>
      {selectedDate && renderSelectedDateDetails()}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Adicionar Tarefa para {selectedDate}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite a tarefa"
            value={taskText}
            onChangeText={setTaskText}
          />
          <Button title="Salvar" onPress={saveTask} />
          <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1F1F1F',
  },
  navbarTitle: {
    fontSize: 20,
    color: 'white',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedMenuItem: {
    backgroundColor: '#444',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
  calendarNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  navText: {
    color: 'white',
    fontSize: 18,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  day: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    margin: 1,
  },
  dayText: {
    color: 'white',
  },
  dayNotes: {
    marginTop: 5,
    color: 'white',
    padding: 2,
    borderRadius: 3,
  },
  details: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  detailsText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  modalTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#222',
    marginBottom: 20,
  },
});

export default MyCalendarApp;

