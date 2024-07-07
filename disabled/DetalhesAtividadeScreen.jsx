import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const DetalhesAtividadeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalhes da Atividade</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="bell" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Horário da Atividade:</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Manhã</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Tarde</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Noite</Text></TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Outro:" placeholderTextColor="#999" />
        
        <Text style={styles.label}>Tipo da Atividade:</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Cardio</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Treino de Força</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Corrida</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Ciclismo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Natação</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Pilates</Text></TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Outro:" placeholderTextColor="#999" />
        
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SALVAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexGrow: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetalhesAtividadeScreen;
