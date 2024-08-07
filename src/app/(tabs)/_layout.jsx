import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={
      { 
      tabBarActiveTintColor: '#5ca0ff', //Azul claro, trocar verde?
      tabBarInactiveTintColor:"#dedede", //Cinza Muito Claro
      headerShown: false,
      tabBarStyle:{
        backgroundColor: "#000",
      }
    }
      }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="CalendarScreen"
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="AddActivityScreen"
        options={{
            title: 'Adicionar atividade',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add-task" color={color} />,
          }}
      />
      <Tabs.Screen
        name="AddMealScreen"
        options={{
            title: 'Adicionar refeição',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="food-apple" color={color} />,
          }}
      />
      <Tabs.Screen //Terminar
        name="SetGoalScreen"
        options={{
          href: null
          }}
      />
      <Tabs.Screen //Terminar
        name="HomeScreen"
        options={{          
          href: null
        }}
      />
    </Tabs>
  );
}
