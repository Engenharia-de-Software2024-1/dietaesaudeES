import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import WorkoutComponent from './WorkoutComponent';

const { width } = Dimensions.get('window');

const DynamicComponent = ({ data = [] }) => {
  
  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        (<Text>Dieta</Text>),
        data.map((item) => {
          if (item.workout_type) {
            return (
              <WorkoutComponent data={item}/>
            );
          } else {
            return (
              <Text key={item.id}>
                {item.date} - {item.daytime}
              </Text>
            );
          }
        })
      )}
    </View>
  );
};

export default DynamicComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    height: width / 1.2,
    width: width * 0.9 - 20,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
  },
});
