import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Acesse sua conta</Text>
      </View>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            title="Entrar"
            color="#0000FF" 
            onPress={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Não tem uma conta? <Text style={styles.createAccountLink}>Crie uma</Text></Text>
        </TouchableOpacity>
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
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#0000FF', 
  },
  buttonContainer: {
    marginTop: 20,
  },
  createAccountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#666666',
  },
  createAccountLink: {
    color: '#0000FF', 
  },
});

export default LoginScreen;
