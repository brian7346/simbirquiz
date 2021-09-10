import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundPlate } from "./BackgroundPlate";
import LottieView from "lottie-react-native";

export class UserStudy extends React.PureComponent<{onClick: () => void}> {
  private animation: any;

  componentDidMount() {
    this.animation.play();
  }

  handleNavigate = () => {
    // this.props.navigation.navigate("Quiz")
    this.props.onClick()

    // this.props.navigation.navigate('CardStack')
  };
  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={ this.handleNavigate }>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require("../assets/startButton.json")}
        />
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
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "space-around",
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 20,
  },
});
