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
import UserAchievements from "../components/UserAchievements";
import { UserHeader } from "../components/UserHeader";
import { UserLvl } from "../components/UserLvl";
import Colors from "../constants/Colors";

export default class CardStackScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {
  handleShopNavigate = () => {
    this.props.navigation.navigate("Shop");
  };

  handleAchievementsNavigate = () => {
    this.props.navigation.navigate("Achievements");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UserHeader />
        <ScrollView>
          <UserLvl handleShopNavigate={this.handleShopNavigate}/>
          <CardsCarousel navigation={this.props.navigation} />
          <UserAchievements handleAchievementsNavigate={this.handleAchievementsNavigate}/>
        </ScrollView>
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
