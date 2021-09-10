
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import QuizScreen from '../../screens/QuizScreen';



const options = { headerShown: false }

const Stack = createNativeStackNavigator();

export default function QuizNavigator() {
    return (
        <Stack.Navigator>
            {/*<Stack.Screen name="Main" component={WelcomeScreen} options={options} />*/}
            {/*<Stack.Screen name="Main" component={TurorialScreen} options={options} />*/}
            <Stack.Screen name="Quiz" component={QuizScreen} options={options} />
            {/*<Stack.Screen name="Result" component={ResultScreen} options={options}  />*/}
        </Stack.Navigator>
    );
}
