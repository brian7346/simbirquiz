import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { PurpuleShortPlate } from "./PurpuleShortPlate";
import { useSelector } from "react-redux";

export const UserCourses = () => {
  const user = useSelector((state) => state.user);
  const courses = useSelector((state) => state.courses);

  return (
    <SafeAreaView style={styles.container}>
      <PurpuleShortPlate onPress={() => null}>
        <>
          <View style={styles.icon}>
            <FontAwesome size={35} name="code" color="orange" />
          </View>
          <Text style={[Fonts.base, styles.title]}>
            <Text style={[Fonts.bold, styles.title]}>{courses.length}</Text>{" "}
            Всего
          </Text>
        </>
      </PurpuleShortPlate>
      <PurpuleShortPlate onPress={() => null}>
        <>
          <View style={styles.icon}>
            <FontAwesome size={35} name="check" color="lightgreen" />
          </View>
          <Text style={[Fonts.base, styles.title]}>
            <Text style={[Fonts.bold, styles.title]}>
              {user.coursesCompleted}{" "}
            </Text>
            Пройдено
          </Text>
        </>
      </PurpuleShortPlate>
      <PurpuleShortPlate onPress={() => null}>
        <>
          <View style={styles.icon}>
            <FontAwesome size={30} name="close" color="red" />
          </View>
          <Text style={[Fonts.base, styles.title]}>
            <Text style={[Fonts.bold, styles.title]}>
              {courses.length - user.coursesCompleted}{" "}
            </Text>
            Провалено
          </Text>
        </>
      </PurpuleShortPlate>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "space-between",
    backgroundColor: Colors.dark.background,
  },
  title: {
    marginTop: 7,
    fontSize: 16,
  },
  icon: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    borderRadius: 50,
  },
  plate: {
    backgroundColor: "#021B79",
    borderRadius: 10,
    height: 150,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
