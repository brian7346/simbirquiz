import * as React from "react";
import {
  Alert,
  Image,
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
import { useDispatch } from "react-redux";
import { setCourseComplete, addCoins } from "../store/user/reducer";
import { useEffect, useState } from "react";
import { setAchievements } from "../store/achievements/reducer";
import { refreshInternCourse } from "../store/interns/reducer";

export default function QuizResult({
  route: { params },
}: RootStackScreenProps<"NotFound">) {
  const navigation = useNavigation();
  const { awards } = params;
  const [modalVisible, setModalVisible] = useState(false);
  const qtCount = params.results.length;
  const qtCountRight = filter(params.results, ["isRight", true]).length;
  const dispatch = useDispatch();
  const wrongAnswers = filter(params.results, ["isRight", false]);
  const goBack = () => {
    navigation.goBack();
  };

  // React.useEffect(() => {
  //   dispatch(
  //     setCourseComplete({
  //       name: "React Native",
  //       rightCount: qtCountRight,
  //     })
  //   );
  // }, []);

  const handleNavigateMain = () => {
    navigation.navigate("CardStack");
  };

  useEffect(() => {
    if (qtCountRight > qtCount / 2) {
      setModalVisible(true);
      dispatch(
        setAchievements({
          id: 3,
        })
      );
    }

    let t = setTimeout(() => setModalVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const getSuccess = (): boolean => {
    if (qtCountRight > qtCount / 2) {
      map(awards, (award) => {
        if (award.conditions == qtCountRight) {
          dispatch(
            addCoins({
              coins: award.coins,
            })
          );
        }
      });

      return true;
    } else {
      return false;
    }
  };

  console.log(wrongAnswers);
  return (
    <SafeAreaView style={styles.container}>
      {modalVisible ? (
        <View style={styles.shadowAbsolute}>
          <LinearGradient
            colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
            style={{ padding: 8 }}
            start={{ x: 0, y: 0.7 }}
            end={{ x: 2, y: 1 }}
          >
            <View style={styles.achievementView}>
              <View style={styles.achievement}>
                <Image
                  style={styles.achievementIcon}
                  source={require(`../assets/images/3.png`)}
                />
              </View>
              <View style={styles.achievementText}>
                <Text style={[Fonts.base, styles.textTytle]}>
                  Без труда - не вытащищь мобилку из пруда!
                </Text>
                <Text style={[Fonts.base, styles.textSubtitle]}>
                  Надо еще раз постараться, а то тебя опередят!
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      ) : null}

      <View
        style={{
          marginTop: 16,
        }}
      ></View>
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
                К сожалению, Вы не прошли тест, возможно, Вы усвоили не весь
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

              <Text style={[Fonts.bold]}>Ошибки:</Text>
              <View>
                {map(wrongAnswers, (item) => {
                  console.log(123);
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <Text
                        style={[Fonts.base, { fontSize: 14, width: "90%" }]}
                      >
                        {item.question}
                      </Text>
                      <FontAwesome
                        name="close"
                        size={25}
                        color={"#792222"}
                        style={{ marginRight: 15 }}
                      />
                    </View>
                  );
                })}
              </View>
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
  textTytle: {
    fontSize: 16,
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
  shadowAbsolute: {
    shadowColor: "#855b8a",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    width: "100%",
    bottom: 60,

    zIndex: 2,
    position: "absolute",
  },
});
