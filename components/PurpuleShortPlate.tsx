import React from "react";
import { View, StyleSheet,TouchableHighlight } from "react-native";

export const PurpuleShortPlate: React.FC<{onPress: () => void}> = ({ children, onPress = () => null }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.plate}>
      { children }
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  plate: {
    backgroundColor: "#021B79",
    borderRadius: 10,
    height: 150,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
