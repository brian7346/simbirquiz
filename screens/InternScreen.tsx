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
    name: "React Native",
    done: true,
    mistakes: 2,
  },
  {
    name: "Swift",
    done: false,
    mistakes: 3,
  },
];

const InternScreen = ({ route, navigation }) => {
  const { intern } = route.params;
  const user = useSelector((state) => state.user);

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

      <View style={styles.avatarArea}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
          }}
        />
        <Text style={[Fonts.base, styles.title]}>{intern.name}</Text>
        <View style={styles.courses}>
          <FlatList
            data={DATA}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => (
              <CardPlate onPress={() => null} key={item.name}>
                <>
                  <View style={styles.icon}>
                    <FontAwesome
                      size={35}
                      name={item.done ? "check" : "close"}
                      color={item.done ? "lightgreen" : "red"}
                    />
                  </View>
                  <Text style={[Fonts.bold, styles.coursTitle]}>
                    {item.name}
                  </Text>
                  <Text style={[Fonts.base, styles.coursTitle]}>
                    {item.mistakes} ошибки
                  </Text>
                </>
              </CardPlate>
            )}
          />
        </View>
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
    fontSize: 24,
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
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  avatarArea: {
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 10,
    borderRadius: 50,
  },
});

export default InternScreen;
