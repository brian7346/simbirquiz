import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundPlate } from "./BackgroundPlate";
import LottieView from "lottie-react-native";

export class UserAchivements extends React.Component {

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={[ Colors.dark.darkGray, Colors.dark.lightGray,]}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 2, y: 1 }}
      >
        <Text style={[Fonts.base, {marginBottom: 16}]}>
          Мои достижения
        </Text>
        {/*<Text style={[Fonts.base, styles.title]}>Достижения</Text>*/}
        <View style={styles.achievements}>
          {["heart", "key", "filter", "trophy"].map((item) => (
            <View style={styles.achievement}>
              <FontAwesome size={25} name={item} color="white" />
            </View>
          ))}
        </View>
        <View style={styles.achievements}>
          {["heart", "key", "filter", "trophy"].map((item) => (
            <View style={styles.achievement}>
              <FontAwesome size={25} name={item} color="white" />
            </View>
          ))}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 7,
    padding: 7,
  },
  container: {
    flexDirection: "column",
    borderRadius: 24,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 22,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 24,
  },
  achievements: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  achievement: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    padding: 7,
    marginLeft: 7,
  },
});
