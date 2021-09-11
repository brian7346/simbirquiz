import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";



export default class CourseScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {
  handleUserStudyClick = () => {
    this.props.navigation.navigate("Quiz");
  };

  goBack = () => {
    this.props.navigation.navigate("Course");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.goBack}>
            <FontAwesome
                size={25}
                style={{ marginBottom: -3 }}
                color={ Colors.dark.text}
                name='chevron-left' />
        </TouchableOpacity>
        <View style={{ flex: 2, marginTop: 20 }}>
            <Text style={{color: Colors.light.tabIconDefault}}>материалы</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 40,
    padding: 20,
  },
  titleText: {
    color: Colors.light.tabIconDefault,
    marginBottom: 15,
    fontSize: 30,
  },
  materials: {
    borderStyle:'solid',
    width: 'auto',
    height: 'auto',
    backgroundColor: Colors.dark.purple,
    borderRadius: 15,
    marginBottom: 10,
    color: Colors.light.tabIconDefault,
    fontSize: 25,
    padding: 15
  }
});