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
        <View style={[styles.block]}>
          <UserCoinsText handleShopNavigate={this.props.handleShopNavigate}/>
          <LottieView
            style={{ width: 60, height: 60 }}
            ref={(animation) => {
              this.animation = animation;
            }}
            source={require("../assets/coinsAnimation.json")}
          />
        </View>
        <View style={styles.block}>
          <UserLvlText />
          <LottieView
            loop={false}
            // onAnimationFinish={() => {
            //     setTimeout(() => {
            //         this.animation2.play()
            //     }, 6000)
            // }}
            style={{ width: 60, height: 60 }}
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  block: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
