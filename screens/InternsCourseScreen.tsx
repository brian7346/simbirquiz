import React from "react";
import Colors from "../constants/Colors";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { CardPlate } from "../components/PurpulePlate";
import Fonts from "../constants/Fonts";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { PurpuleShortPlate } from "../components/PurpuleShortPlate";
import { UserCourses } from "../components/UserCourses";

const DATA = [
  {
    desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
  },
  {
    desc: "Что получится, если сложить true + false?",
  },
  {
    desc: "Чему равно 2 && 1 && null && 0 && undefined",
  },
  {
    desc: "Что делает оператор ===",
  },
];

const InternsCourseScreen = ({ route, navigation }) => {
  const { name, internId } = route.params;
  const intern = useSelector((state) => state.interns.filter(intern => intern.id === internId));

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome
          name="arrow-left"
          size={25}
          color="white"
          style={{ marginHorizontal: 15 }}
        />
      </TouchableOpacity>
      <Text style={[Fonts.base, styles.title]}>
        Где допустил ошибки в теме
        <Text style={[Fonts.bold, styles.title]}> {name}</Text>
      </Text>
      <View style={styles.courses}>
        <TouchableOpacity style={styles.refresh}>
          <FontAwesome
            name="refresh"
            size={25}
            color="lightgreen"
            style={{ marginHorizontal: 15 }}
          />
          <Text style={[Fonts.bold, styles.title]}>Обнулить результат</Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          renderItem={({ item, index }) => (
            <CardPlate onPress={() => null} key={index}>
              <Text style={[Fonts.base, styles.coursTitle]}>{item.desc}</Text>
            </CardPlate>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 32,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  courses: {
    marginVertical: 20,
    width: "100%",
    justifyContent: "space-around",
  },
  coursTitle: {
    marginTop: 7,
    fontSize: 24,
    padding: 10,
  },
  refresh: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: Colors.dark.purple,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 20
  }
});

export default InternsCourseScreen;
