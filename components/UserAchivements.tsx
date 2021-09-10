import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export const UserAchivements = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={[Colors.dark.purple, "#000000"]}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 2, y: 1 }}
      >
        <View style={styles.icon}>
          <FontAwesome size={35} name="trophy" color="white" />
        </View>
        <Text style={[Fonts.base, styles.title]}>Достижения</Text>
        <View style={styles.achievments}>
          {["heart", "key", "filter"].map((item) => (
            <View style={styles.achievment}>
              <FontAwesome size={25} name={item} color="white" />
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 7,
    padding: 7,
  },
  container: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 24,
  },
  achievments: {
    flexDirection: "row",
  },
  achievment: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    padding: 7,
    marginLeft: 7,
  },
});
