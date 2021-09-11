
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import QuizScreen from '../../screens/QuizScreen';
import QuizResult from "../../screens/QuizResult";
import EducationScreen from "../../screens/EducationScreen";
import CourseScreen from "../../screens/CourseScreen";
import {useNavigation, useRoute} from "@react-navigation/native";
import LessonScreen from "../../screens/LessonScreen";



const options = { headerShown: false }

const Stack = createNativeStackNavigator();

export default function QuizNavigator({ route: {params} }) {

  return (
    <Stack.Navigator initialRouteName={"Course"}>
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={options}
        initialParams={params}
      />
      <Stack.Screen
        name="QuizQuestions"
        component={QuizScreen}
        options={options}
      />
      <Stack.Screen
        name="QuizResult"
        component={QuizResult}
        options={options}
      />
      <Stack.Screen
        name="Education"
        component={EducationScreen}
        options={options}
      />
        <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={options}
      />
    </Stack.Navigator>
  );
}
