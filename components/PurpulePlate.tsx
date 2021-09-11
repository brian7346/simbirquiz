import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";

export const CardPlate: React.FC<{onPress: () => void}> = ({ children, onPress = () => null }) => {
  return (
    <TouchableHighlight onPress={ onPress }>
      <LinearGradient
        style={styles.container}
        colors={[ Colors.dark.darkGray, Colors.dark.lightGray,]}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 2, y: 1 }}
      >
          { children }
      </LinearGradient>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
    paddingVertical: 30,
    alignItems: "center",
    marginHorizontal: 10,
  },
});
