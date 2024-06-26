import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../database/initializeDatabase";

export default function Layout(){
    return( 
        <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="screen/HomeScreen"/>
                <Stack.Screen name="screen/SetUpScreen"/>
                <Stack.Screen name="screen/CalendarScreen"/>
                <Stack.Screen name="screen/FrequencyChartScreen"/>
            </Stack>
        </SQLiteProvider>
    )
}