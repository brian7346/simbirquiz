import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";
import Fonts from "../constants/Fonts";
import { UserLvlText } from "./UserLvlText";
import { UserCoinsText } from "./UserCoinsText";

export class UserLvl extends React.PureComponent {
  private animation: any;
  private animation2: any;

  componentDidMount() {
    this.animation.play();
    this.animation2.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <UserCoinsText />
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            source={require("../assets/coinsAnimation.json")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <UserLvlText />
          <LottieView
            ref={(animation) => {
              this.animation2 = animation;
            }}
            source={require("../assets/starAnimation.json")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
    height: 200,
  },
});
