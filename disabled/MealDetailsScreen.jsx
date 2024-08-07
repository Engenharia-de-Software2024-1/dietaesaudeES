import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function MealDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes da Refeição</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
             <FontAwesome name="bell" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.label}>Horário da Refeição:</Text>
        <View style={styles.buttonGroup}>
          {['Café da Manhã', 'Almoço', 'Jantar', 'Lanche', 'Ceia'].map((mealTime) => (
            <TouchableOpacity key={mealTime} style={styles.button}>
              <Text style={styles.buttonText}>{mealTime}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput style={styles.input} placeholder="Outro:" placeholderTextColor="#888" />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SALVAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    color: '#fff',
    marginLeft: 10,
  },
  label: {
    color: '#000',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#000',
  },
  input: {
    backgroundColor: '#eee',
    color: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
