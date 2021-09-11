import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Fonts from '../constants/Fonts';
import { ScrollView } from "react-native-gesture-handler";



const lessons = [1, 2, 3, 4, 5];
export default class CourseScreen extends React.Component<{
  navigation: { navigate: (screen: string) => void };
}> {

  goBack = () => {
    this.props.navigation.navigate("Course");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={this.goBack}>
            <FontAwesome
                size={25}
                style={{ marginBottom: 10 }}
                color={ Colors.dark.text}
                name='chevron-left' />
        </TouchableOpacity>
        <LinearGradient
              colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
              style={styles.shadow}
            >
              <Text style={styles.textStyle}>
                Здесь вы можете изучить курс, начиная с нуля и заканчивая продвинутыми уровнем.
              </Text>
        </LinearGradient>
        {lessons.map((item, index) => (
          <TouchableOpacity>
          <View key={index} >
                <LinearGradient
              colors={["#303065", '#6046D3']}
              style={styles.shadowItem}
            >
              <Text style={[Fonts.base, styles.textStyle]}>Урок № {item}</Text>
            </LinearGradient>
          </View>
          </TouchableOpacity>
        ))}

        </ScrollView>
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
    color: Colors.light.tabIconDefault,
    fontSize: 25,
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
  shadowItem: {
    height: 30,
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