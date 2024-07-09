
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function TaskOptions({selected, setSelected}) {



  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSelected('meals')}>
                <Text style={selected == 'meals'? styles.selectedButton : styles.button}>Dieta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected('workouts')}>
                <Text style={selected == 'workouts' ? styles.selectedButton : styles.button}>Treino</Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    button:{
        fontSize: 18,
        marginHorizontal: 10,
        color: "black"
    },
    selectedButton:{
        fontSize: 18,
        marginHorizontal: 10,
        color: "#118ab2"
    },
});