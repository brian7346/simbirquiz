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
import { ScrollView } from "react-native-gesture-handler";

export default class LessonScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {
  goBack = () => {
    this.props.navigation.goBack();
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
            style={{ marginBottom: 10 }}
            color={Colors.dark.text}
            name="chevron-left"
          />
        </TouchableOpacity>
        <LinearGradient
          colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 2, y: 1 }}
          style={styles.shadow}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textStyle}>
              Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.   Здесь вы можете изучить курс, начиная с нуля и заканчивая
              продвинутыми уровнем.
            </Text>
          </ScrollView>
        </LinearGradient>

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
    color: Colors.light.tabIconDefault,
    fontSize: 16,
    lineHeight: 24,
  },
  materials: {
    borderStyle: "solid",
    width: "auto",
    height: "auto",
    backgroundColor: Colors.dark.purple,
    borderRadius: 15,
    marginBottom: 10,
    color: Colors.light.tabIconDefault,
    fontSize: 24,
    padding: 15,
  },
  shadow: {
    flex: 1,
    marginTop: 22,
    marginHorizontal: 16,
    borderRadius: 32,
    marginBottom: 22,
    padding: 16,
    paddingVertical: 22,
  },
  shadowItem: {
    marginHorizontal: 16,
    borderRadius: 24,
    marginBottom: 16,
    padding: 16,
  },
});
