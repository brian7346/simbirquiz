import * as React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";
import { PureComponent, useEffect, useRef } from "react";
import Fonts from "../constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { SSButton } from "../components/SimbirButton";

export default class LoginScreen extends PureComponent {
  private animation: any;

  componentDidMount() {
    this.animation.play();
  }

  handleNavigate = () => {
    // this.props.navigation.navigate("Quiz")
    this.props.navigation.navigate("CardStack");

    // this.props.navigation.navigate('CardStack')
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={[Fonts.base, { fontSize: 32 }]}>Добро пожаловать,</Text>
          <Text style={[Fonts.bold, { fontSize: 42 }]}>Илья!</Text>
          <Text style={[Fonts.base]}>Готов узнать что то новое?</Text>
        </View>

        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 200,
            marginVertical: "15%",
          }}
          source={require("../assets/wavesAnimation.json")}
        />
        <SSButton
          gradient={[Colors.dark.darkGray, Colors.dark.lightGray]}
          onPress={this.handleNavigate}
          icon="code"
          text="Приступим"
          styles={styles.btn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "space-around",
    padding: 16,
    marginHorizontal: 64,
    borderRadius: 32,
    flexDirection: "row",
  },
  welcomeContainer: {
    backgroundColor: Colors.dark.background,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: 36,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
