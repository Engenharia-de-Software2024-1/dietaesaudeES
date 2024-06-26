import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

// Para alterar
const exampleData = {
  treino: {
    '2024-06-01': 'Corrida',
    '2024-06-03': 'Natação',
    '2024-06-05': 'Ciclismo',
    '2024-06-07': 'Corrida',
    '2024-06-09': 'Natação',
    '2024-06-11': 'Ciclismo',
  },
  dieta: {
    '2024-06-02': 'Low Carb',
    '2024-06-04': 'Keto',
    '2024-06-06': 'Vegan',
    '2024-06-08': 'Paleo',
    '2024-06-10': 'Mediterranean',
  }
};

const getWeeklyFrequency = (data) => {
  const weekData = Array(7).fill(0);
  Object.keys(data).forEach((date) => {
    const dayOfWeek = new Date(date).getDay();
    weekData[dayOfWeek] += 1;
  });
  return weekData;
};

const FrequencyChartScreen = () => {
  const [selectedOption, setSelectedOption] = useState('treino');
  const [data, setData] = useState(exampleData[selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setData(exampleData[option]);
  };

  const weeklyFrequency = getWeeklyFrequency(data);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>weeklyFrequency</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Ionicons name="ellipsis-vertical" size={24} color="white" style={styles.moreIcon} />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuItem, selectedOption === 'treino' && styles.selectedMenuItem]}
          onPress={() => handleOptionChange('treino')}
        >
          <Text style={styles.menuItemText}>Treino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, selectedOption === 'dieta' && styles.selectedMenuItem]}
          onPress={() => handleOptionChange('dieta')}
        >
          <Text style={styles.menuItemText}>Dieta</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Frequência Semanal</Text>
      <BarChart
        data={{
          labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
          datasets: [{ data: weeklyFrequency }],
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.title}>Tarefas Concluídas</Text>
      <FlatList
        data={Object.entries(data)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item[0]}: {item[1]}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const chartConfig = {
  backgroundColor: '#1E2923',
  backgroundGradientFrom: '#08130D',
  backgroundGradientTo: '#1E2923',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1E1E1E',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  moreIcon: {
    marginLeft: 15,
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuItem: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1E1E1E',
  },
  selectedMenuItem: {
    backgroundColor: '#3E3E3E',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
  chart: {
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 5,
    width: screenWidth - 20,
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
  },
});

export default FrequencyChartScreen;
