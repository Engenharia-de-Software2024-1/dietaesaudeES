import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Crie sua conta</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#666666"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666666"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repita a senha"
          placeholderTextColor="#666666"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Continuar"
            color="#0000FF"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  header: {
    backgroundColor: '#000000', 
    padding: 15,
  },
  headerText: {
    color: '#FFFFFF', 
    fontSize: 24,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default CreateAccountScreen;
