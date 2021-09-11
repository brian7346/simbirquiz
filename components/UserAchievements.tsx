import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const icons = {
  1: require(`../assets/images/1.png`),
  2: require(`../assets/images/2.png`),
  3: require(`../assets/images/3.png`),
  4: require(`../assets/images/4.png`),
  5: require(`../assets/images/5.png`),
  6: require(`../assets/images/6.png`),
  7: require(`../assets/images/7.png`),
  8: require(`../assets/images/8.png`),
}

export class UserAchievements extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.handleAchievementsNavigate}>
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
            {[1,2,3,4,].map((item, key) => {
              console.log(`../assets/images/${key}.png`)
              return (
                  <View key={key}  style={styles.achievement}>
                    <Image style={styles.achievementIcon} source={icons[item]}/>
                  </View>
              )
            } )}
          </View>
          <View style={styles.achievements}>
            {[5,6,7,8].map((item, key) => {
              return (
                  <View key={key}  style={styles.achievement}>
                    <Image style={styles.achievementIcon} source={icons[item]}/>
                  </View>
              )
            } )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
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
