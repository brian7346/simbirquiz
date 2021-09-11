import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { PurpulePlate } from "./PurpulePlate";

export class UserAchivements extends React.Component {
  render() {
    return (
      <PurpulePlate>
        <View style={styles.icon}>
          <FontAwesome size={35} name="trophy" color="white" />
        </View>
        <Text style={[Fonts.base, styles.title]}>Достижения</Text>
        <View style={styles.achievments}>
          {["heart", "key", "filter"].map((item, index) => (
            <View style={styles.achievment} key={ index }>
              <FontAwesome size={25} name={item} color="white" />
            </View>
          ))}
        </View>
      </PurpulePlate>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 7,
    padding: 7,
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
