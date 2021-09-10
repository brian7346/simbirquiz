import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const BackgroundPlate: React.FC = ({ children }) => {
  return (
    <BackgroundPlate>
        { children }
    </BackgroundPlate>
  )
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    padding
  },
});
