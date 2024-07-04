import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["26/06", "27/06", "28/06"],
  datasets: [
    {
      data: [3, 2, 5],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, //meta
      strokeWidth: 2,
    },
    {
      data: [4, 3, 7],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
  legend: ["Meta", "Atividade Realizada"],
};

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.headerText}>Início</Text>
        <MaterialIcons name="more-vert" size={24} color="#fff" style={styles.icon} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Rotina</Text>
        <View style={styles.toggleButtons}>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Dieta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Treino</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addButtonContainer}>
          <MaterialIcons name="add-circle" size={24} color="blue" />
          <Text style={styles.addButtonText}>Adicionar atividade / Criar uma meta</Text>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdown}>Dia</Text>
          <Text style={styles.dropdown}>Junho</Text>
          <Text style={styles.dropdown}>Ano</Text>
        </View>
        <LineChart
          data={data}
          width={screenWidth - 20}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
            <Text style={styles.legendText}>Meta</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: 'blue' }]} />
            <Text style={styles.legendText}>Atividade Realizada</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const chartConfig = {
  backgroundColor: "#000",
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
};

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
  icon: {
    padding: 10,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center',
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    marginLeft: 10,
    color: 'blue',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '30%',
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendColor: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
  },
});
