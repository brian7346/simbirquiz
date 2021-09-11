import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export class UserAchievements extends React.Component {

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
        <View style={styles.achievements}>
          {["heart", "key", "filter", "trophy"].map((item, key) => (
            <View key={key}  style={styles.achievement}>
              <Image style={styles.achievementIcon} source={require('../assets/images/4.png')}/>
            </View>
          ))}
        </View>
        <View style={styles.achievements}>
          {["heart", "key", "filter", "trophy"].map((item, key) => (
            <View key={key} style={styles.achievement}>
              <Image style={styles.achievementIcon} source={require('../assets/images/4.png')}/>
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
  achievementIcon: {
    width: 50,
    height: 50,
    margin: 10
  },
  achievements: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  achievement: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    // padding: 7,
    // marginLeft: 7,
  },
});
