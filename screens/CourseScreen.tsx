import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Fonts from '../constants/Fonts';

export default class CourseScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {
  handleUserStudyClick = () => {
    this.props.navigation.navigate("Quiz");
  };

  goToEducation = () => {
    this.props.navigation.navigate("Education");
  }

  goBack = () => {
    this.props.navigation.navigate("CardStack");
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
          <Text style={[Fonts.base, styles.heading]}>Приступим?</Text>
          <TouchableOpacity onPress={this.goToEducation}>
            <LinearGradient
            colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
            style={styles.shadow}
          >
              <Text style={[Fonts.base, styles.textStyle]}>Изучить материалы</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleUserStudyClick}>
            <View>
            <LinearGradient
              colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
              style={styles.shadow}
            >
              <Text style={[Fonts.base, styles.textStyle]}>Пройти тестирование</Text>
            </LinearGradient>
            </View>
          </TouchableOpacity>
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
  textStyle: {
    fontSize: 25
  },
  heading: {
    color: Colors.dark.text,
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  materials: {
    borderStyle:'solid',
    backgroundColor: Colors.dark.purple,
    borderRadius: 15,
    marginBottom: 10,
    color: Colors.light.tabIconDefault,
    fontSize: 25,
    padding: 15
  },
  shadow: {
    borderRadius: 32,
    marginBottom: 32,
    padding: 36,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});