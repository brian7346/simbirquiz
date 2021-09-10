import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions
} from "react-native";

export default class CardStackScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.root}>
          <Text>Cards </Text>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16
  },
  container: {
    flex: 1
  }
});
