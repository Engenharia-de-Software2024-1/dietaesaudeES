import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function WorkoutComponent({taskDate, taskType, taskDaytime, onDelete}) {
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{taskDate}</Text>
        <Text style={styles.text}>{taskType}</Text>
        <Text style={styles.text}>{taskDaytime}</Text>
        <TouchableOpacity onPress={onDelete}>
            <FontAwesome name='trash' size={28} color={"red"}/>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#3c3c3c",
        margin: 5,
        padding: 15,
        borderRadius: 10
    },
    text:{
        color: "white"
    }
})