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

const ndate = new Date();
const hours = ndate.getHours();

const InternItem = ({ intern }) => {
    const navigation = useNavigation();

  return (
    <CardPlate onPress={() => navigation.navigate('Intern', { intern })}>
      <Image
        style={styles.avatar}
        source={{
          uri: intern.avatar,
        }}
      />
      <Text style={[Fonts.base, { fontSize: 24 }]}>{intern.name}</Text>
      <View style={styles.internLvl}>
        <View style={styles.lvl}>
          <Text style={[Fonts.base, { fontSize: 22 }]}>{intern.lvl}</Text>
        </View>
        <Text style={[Fonts.bold, { fontSize: 16 }]}>уровень</Text>
      </View>
    </CardPlate>
  );
};

const InternsLitsScreen = () => {
  const interns = useSelector((state) => state.interns);
  const user = useSelector((state) => state.user);
  const greeting =
    hours < 5
      ? "Доброй ночи"
      : hours < 12
      ? "Доброе утро"
      : hours < 18
      ? "Добрый день"
      : "Добрый вечер";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={[Fonts.base, styles.title]}>
          {greeting}, {user.name}
        </Text>
        <Text style={[Fonts.base, styles.title]}>
          вот список ваших{" "}
          <Text style={[Fonts.bold, styles.title]}>стажёров</Text>
        </Text>
      </View>
      <FlatList
        data={interns}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        renderItem={({ item }) => <InternItem intern={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  greeting: {
    marginHorizontal: 10,
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  internLvl: {
    justifyContent: "center",
    alignItems: "center",
  },
  lvl: {
    backgroundColor: "rgba(10,10,60, 0.5)",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default InternsLitsScreen;
