import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screen/HomeScreen'

const Stack = createNativeStackNavigator();

export function AppStack(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,}}>
            <Stack.Screen name="Login" component={HomeScreen} />
        </Stack.Navigator>
    )
}