import * as React from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { RootStackScreenProps } from "../types";
import Colors from "../constants/Colors";
import map from "lodash/map";
import filter from "lodash/filter";
import { FontAwesome } from "@expo/vector-icons";
import Fonts from "../constants/Fonts";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function QuizResult({
  route: { params },
}: RootStackScreenProps<"NotFound">) {
  const navigation = useNavigation();
  const { awards } = params;
  const qtCount = params.results.length;
  const qtCountRight = filter(params.results, ["isRight", true]).length;

  const goBack = () => {
    navigation.goBack();
  };

  const handleNavigateMain = () => {
    navigation.navigate('CardStack');
  };
  const getSuccess = (): boolean => {
    if (qtCountRight > qtCount / 2) {
      map(awards, (award) => {
        if (award.conditions == qtCountRight) {
          // Alert.alert(`Вы заработали ${award.coins} монет`);
        }
      });

      return true;
    } else {
      return false;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 16,
        }}
      >
      </View>
      <View style={styles.viewStyle}>
        <Text style={[Fonts.base, { fontSize: 18, textAlign: "center" }]}>
          Ваш результат - {qtCountRight} из {qtCount}
        </Text>
        <View style={styles.resultContainer}>
          {getSuccess() ? (
            <>
              <Text style={[Fonts.base, styles.text]}>
                Ура! Ты прошел тест и можешь приступать к следующему
              </Text>
              <TouchableOpacity onPress={handleNavigateMain}>
                <LinearGradient
                  style={styles.shadow}
                  colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
                  start={{ x: 0, y: 0.7 }}
                  end={{ x: 2, y: 1 }}
                >
                  <Text style={[Fonts.base, styles.textBtnStyle]}>
                    На главную
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={[Fonts.base, styles.text]}>
                К сожалению вы не прошли тест, возможно вы усвоили не весь
                материал, давайте повторим и попробуем еще :)
              </Text>
              <TouchableOpacity onPress={handleNavigateMain}>
                <LinearGradient
                  style={styles.shadow}
                  colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
                  start={{ x: 0, y: 0.7 }}
                  end={{ x: 2, y: 1 }}
                >
                  <Text style={[Fonts.base, styles.textBtnStyle]}>
                    В начало
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 40,
    padding: 16,
  },
  textTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 22,
    marginHorizontal: 16,
  },
  textSubtitle: {
    fontSize: 12,
    textAlign: "left",
  },
  viewStyle: {
    flex: 2,
    marginTop: 20,
  },
  shadow: {
    margin: 20,
    borderRadius: 24,
    marginBottom: 16,
    padding: 12,
  },
  achievement: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    marginRight: 20,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    margin: 10,
  },
  achievementView: {
    display: "flex",
    flexDirection: "row",
  },
  achievementText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 200,
  },
  textBtnStyle: {
    fontSize: 16,
    textAlign: "center",
  },
});
