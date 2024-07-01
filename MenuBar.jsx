import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import AddActivityScreen from './src/screens/AddActivityScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import DietScreen from './src/screens/DietScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CalendarStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calendário" component={CalendarScreen} />
    <Stack.Screen name="Treino" component={TrainingScreen} />
    <Stack.Screen name="Dieta" component={DietScreen} />
  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Calendário"
        onPress={() => props.navigation.navigate('Calendário')}
        icon={({ color, size }) => (
          <Icon name="calendar-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Treino"
        onPress={() => props.navigation.navigate('Treino')}
        icon={({ color, size }) => (
          <Icon name="barbell-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Dieta"
        onPress={() => props.navigation.navigate('Dieta')}
        icon={({ color, size }) => (
          <Icon name="fast-food-outline" color={color} size={size} />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Adicionar Atividade"
          component={AddActivityScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="add-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calendário"
          component={CalendarStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="calendar-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
