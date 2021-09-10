
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from "../../screens/LoginScreen";
import CardStackScreen from "../../screens/CardStackScreen";
import QuizNavigator from "./QuizNavigator";





const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CardStack" component={CardStackScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="Quiz" component={QuizNavigator} options={{ headerShown: false }}  />
        </Stack.Navigator>
    );
}
