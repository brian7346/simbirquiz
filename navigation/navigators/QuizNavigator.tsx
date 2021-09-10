
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import QuizScreen from '../../screens/QuizScreen';
import QuizResult from "../../screens/QuizResult";



const options = { headerShown: false }

const Stack = createNativeStackNavigator();

export default function QuizNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Quiz" component={QuizScreen} options={options} />
            <Stack.Screen name="QuizResult" component={QuizResult} options={options}  />
        </Stack.Navigator>
    );
}
