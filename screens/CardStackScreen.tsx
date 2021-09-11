import React from "react";
import { CardsCarousel } from "../components/CardsCarousel"
import { StyleSheet, Text, SafeAreaView, Dimensions, View } from "react-native";
import { UserAchivements } from "../components/UserAchivements";
import { UserHeader } from "../components/UserHeader";
import { UserLvl } from "../components/UserLvl";
import { UserStudy } from "../components/UserStudy";
import Colors from "../constants/Colors";

export default class CardStackScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {
  handleUserStudyClick = () => {
    this.props.navigation.navigate("Quiz");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 2 }}>
          <UserHeader />
          <UserLvl />
          <UserAchivements />
          <CardsCarousel />
        </View>
        <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
          <UserStudy onClick={this.handleUserStudyClick} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
