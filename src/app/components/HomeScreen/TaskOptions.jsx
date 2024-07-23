import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TaskOptions({selected, setSelected}) {

  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSelected('workouts')}>
                <Text style={selected == 'workouts' ? styles.selectedButton : styles.button}>Treino</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected('meals')}>
                <Text style={selected == 'meals'? styles.selectedButton : styles.button}>Dieta</Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        fontSize: 18,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: 'gray',
        color: 'white'
    },
    selectedButton:{
        fontSize: 18,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#1e90ff',
        color: 'white'
    },
});