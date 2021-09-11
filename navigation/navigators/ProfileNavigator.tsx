import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';


const options = {
{
    headerShown: false
}
}

const Stack = createNativeStackNavigator();

function QuizNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={WelcomeScreen} options={options}/>
            <Stack.Screen name="Main" component={TurorialScreen} options={options}/>
            <Stack.Screen name="Main" component={QuizScreen} options={options}/>
            <Stack.Screen name="Result" component={ResultScreen} options={options}/>
        </Stack.Navigator>
    );
}
