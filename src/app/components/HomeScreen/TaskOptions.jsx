
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function TaskOptions({selected, setSelected, list}) {
  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {setSelected('dieta'); list;}}>
                <Text style={selected == 'dieta'? styles.selectedButton : styles.button}>Dieta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelected('treino'); list;}}>
                <Text style={selected == 'treino' ? styles.selectedButton : styles.button}>Treino</Text>
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
        color: "blue"
    },
});