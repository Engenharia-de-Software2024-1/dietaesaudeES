import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TaskOptions({selected, setSelected}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={selected == 'workouts' ? styles.selectedButtonContainer : styles.buttonContainer} 
        onPress={() => setSelected('workouts')}
      >
        <Text style={styles.buttonText}>Treino</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={selected == 'meals' ? styles.selectedButtonContainer : styles.buttonContainer} 
        onPress={() => setSelected('meals')}
      >
        <Text style={styles.buttonText}>Dieta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Ajuste de borda
    backgroundColor: 'gray',
  },
  selectedButtonContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Ajuste de borda
    backgroundColor: '#1e90ff', //Azul
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
