import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions
} from "react-native";

import { UserHeader } from "../components/UserHeader";
import { CardsCarousel } from "../components/CardsCarousel"
import { UserAchivements } from "../components/UserAchivements";
import Colors from "../constants/Colors";

export default class CardStackScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <UserHeader />
          <UserAchivements />
          <CardsCarousel />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  }
});
