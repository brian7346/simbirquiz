import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions
} from "react-native";
import { UserAchivements } from "../components/UserAchivements";
import { UserHeader } from "../components/UserHeader";
import Colors from "../constants/Colors";

export default class CardStackScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <UserHeader />
          <UserAchivements />
          <Text>Cards </Text>
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
