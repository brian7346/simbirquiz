import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";

export class UserStudy extends React.PureComponent<{onClick: () => void}> {
  private animation: any;

  componentDidMount() {
    this.animation.play();
  }

  handleNavigate = () => {
    this.props.onClick()
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
