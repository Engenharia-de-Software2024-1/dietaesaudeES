import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={
      { 
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor:"#fff", 
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
        name="SetUpScreen"
        options={{
            title: 'Adicionar atividade',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add-task" color={color} />,
          }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          href: null
        }}
      />
      
    </Tabs>
  );
}
