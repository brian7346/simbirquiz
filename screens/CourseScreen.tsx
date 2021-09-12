import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Fonts from "../constants/Fonts";

export default class CourseScreen extends React.Component {
  componentDidMount() {
    const { setOptions } = this.props.navigation;
    setOptions({ title: "Updated!" });
  }

  handleUserStudyClick = () => {
    this.props.navigation.navigate("QuizQuestions");
  };

  goToEducation = () => {
    this.props.navigation.navigate("Education");
  };

  goBack = () => {
    this.props.navigation.navigate("CardStack");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            marginLeft: 16,
          }}
          onPress={this.goBack}
        >
          <FontAwesome
            size={25}
            style={{ marginBottom: -3 }}
            color={Colors.dark.text}
            name="chevron-left"
          />
        </TouchableOpacity>
        <View style={{ flex: 2, marginTop: 20 }}>
          <Text style={[Fonts.base, { fontSize: 16, textAlign: "center" }]}>
            Добро пожаловать на курс по
          </Text>
          <Text style={[Fonts.base, styles.heading]}>
            {this.props.route.params.title}
          </Text>
          <TouchableOpacity onPress={this.goToEducation}>
            <LinearGradient
              style={styles.shadow}
              colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
              start={{ x: 0, y: 0.7 }}
              end={{ x: 2, y: 1 }}
            >
              <Text style={[Fonts.base, styles.textStyle]}>
                Изучить материалы
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleUserStudyClick}>
            <LinearGradient
              colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
              style={styles.shadow}
              start={{ x: 0, y: 0.7 }}
              end={{ x: 2, y: 1 }}
            >
              <Text style={[Fonts.base, styles.textStyle]}>
                Пройти тестирование
              </Text>
            </LinearGradient>
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
    padding: 16,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
  },
  heading: {
    color: Colors.dark.text,
    fontSize: 24,
    textAlign: "center",
  },
  materials: {
    borderStyle: "solid",
    backgroundColor: Colors.dark.purple,
    borderRadius: 15,
    marginBottom: 10,
    color: Colors.light.tabIconDefault,
    fontSize: 24,
    padding: 15,
  },
  shadow: {
    margin: 20,
    borderRadius: 24,
    marginBottom: 16,
    padding: 12,
  },
});
