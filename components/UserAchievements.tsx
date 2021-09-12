import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

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

class UserAchievements extends React.Component {

  render() {

    const {achievements} = this.props

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
            {achievements.map((item, key) => {
              if (item.unlocked) {
                return (
                    <View key={key}  style={styles.achievement}>
                      <Image style={styles.achievementIcon} source={item.icon}/>
                    </View>
                )
              } else {
                return null
              }

            } )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    achievements: state.achievements,
  })
}


export default connect(mapStateToProps, null)(UserAchievements)

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
    // width: '100%',
    // flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 16,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  achievement: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    marginBottom: 7,
    marginRight: 7,
  },
});
