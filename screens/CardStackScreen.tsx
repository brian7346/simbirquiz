import React from "react";
import { CardsCarousel } from "../components/CardsCarousel";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import { UserAchievements } from "../components/UserAchievements";
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
        <UserHeader />
        <ScrollView>
          <UserLvl />
          <CardsCarousel navigation={this.props.navigation} />

          <UserAchievements />
        </ScrollView>
        {/*<View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>*/}
        {/*  <UserStudy onClick={this.handleUserStudyClick} />*/}
        {/*</View>*/}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: Colors.dark.background,
  },
});
