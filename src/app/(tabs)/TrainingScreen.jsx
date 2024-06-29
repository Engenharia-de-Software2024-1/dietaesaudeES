import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Modal, TextInput, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/pt-br'; 

moment.locale('pt-br');

export default function TrainingScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    moment.locale('pt-br');
  }, []);

  const onDateChange = (date) => {
    setSelectedDate(date.dateString);
    setModalVisible(true);
  };

  const addActivity = () => {
    if (selectedDate && activity && time) {
      setActivities({
        ...activities,
        [selectedDate]: [...(activities[selectedDate] || []), { activity, time }],
      });
      setActivity('');
      setTime('');
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Icon name="notifications-outline" size={24} color="#fff" />
        <Text style={styles.headerText}>Calendário</Text>
        <Icon name="ellipsis-vertical-outline" size={24} color="#fff" />
      </View>
      <Calendar
        onDayPress={onDateChange}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        firstDay={1}
        locale={'pt-br'}
        markedDates={Object.keys(activities).reduce((acc, date) => {
          acc[date] = { marked: true };
          return acc;
        }, {})}
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
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text>Adicionar Atividade</Text>
          <TextInput placeholder="Atividade" value={activity} onChangeText={setActivity} style={styles.input} />
          <TextInput placeholder="Turno (manhã, tarde, noite)" value={time} onChangeText={setTime} style={styles.input} />
          <Button title="Adicionar" onPress={addActivity} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <FlatList
        data={Object.keys(activities)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.activityView}>
            <Text style={styles.dateText}>{item}</Text>
            {activities[item].map((act, index) => (
              <Text key={index}>{`${act.activity} (${act.time})`}</Text>
            ))}
          </View>
        )}
      />
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
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 35,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  activityView: {
    padding: 10,
    borderBottomWidth: 1,
  },
  dateText: {
    fontWeight: 'bold',
  },
});
