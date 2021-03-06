
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InternsLitsScreen from '../../screens/InternsLitsScreen';
import InternScreen from '../../screens/InternScreen';
import InternsCoursScreen from '../../screens/InternsCourseScreen';

const options = { headerShown: false }

const Stack = createNativeStackNavigator();

export default function QuizNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InternsList" component={InternsLitsScreen} options={options} />
            <Stack.Screen name="Intern" component={InternScreen} options={options} />
            <Stack.Screen name="InternsCours" component={InternsCoursScreen} options={options} />
        </Stack.Navigator>
    );
}
