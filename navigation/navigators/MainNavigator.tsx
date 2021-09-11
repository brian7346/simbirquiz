import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import LoginScreen from "../../screens/LoginScreen";
import ShopScreen from "../../screens/ShopScreen";
import CardStackScreen from "../../screens/CardStackScreen";
import AchievementsScreen from "../../screens/AchievementsScreen";
import QuizNavigator from "./QuizNavigator";
import InternsNavigator from "./InternsNavigator";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Roles } from "../../store/user/reducer";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    if (user.role === Roles.MENTOR) {
      navigation.navigate("Interns");
    }
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardStack"
        component={CardStackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Interns"
        component={InternsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
