import React from "react";
import QuizSingleChoice from "../components/QuizSingleChoice";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const navigation = useNavigation();

  const data = {
    awards: [
      {
        coins: 5,
        achievementId: 1,
        conditions: 1,
      },
    ],
    questions: [
      {
        question:
          "В прототипном наследовании экземпляры наследуются от других экземпляров. (Прототип)",
        optionA: "Прототип",
        optionB: "Наследование",
        answer: "Прототип",
      },
      {
          question: "Как узнать есть ли св-во у объекта или оно находится в цепочке прототипов(hasOwnProperty)?",
          optionA: "hasOwnProperty",
          optionB: "objectKeys",
          answer: "hasOwnProperty",
      },
      {
          question: "Сколько может быть прототипов у одного объекта?(Один)",
          optionA: "Один",
          optionB: "Шесть",
          optionC: "Сколько угодно",
          answer: "Один",
      },
      {
          question: "Проверяет принадлежность экземпляра какому то классу?(instanceof)",
          optionA: "instanceof",
          optionB: "typeof",
          answer: "instanceof",
      },   {
          question: "Замыкания комбинация функции и лексического окружения, другими словами область памяти созданная функцией в которой есть доступ к переменным созданным в этой функции?(замыкания)",
          optionA: "замыкания",
          optionB: "область видимости",
          answer: "замыкания",
      },
    ],
  };

  return (
    <QuizSingleChoice
      containerStyle={{
        backgroundColor: Colors.dark.background,
        paddingTop: 30,
      }}
      questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
      responseStyle={{
        borderRadius: 15,
      }}
      responseTextStyle={{
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 8,
      }}
      selectedResponseTextStyle={{
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 8,
      }}
      selectedResponseStyle={{
        borderRadius: 15,
        borderColor: "#707070",
        borderWidth: 1,
        backgroundColor: "#fa5541",
      }}
      responseRequired={true}
      nextButtonText={"Дальше"}
      nextButtonStyle={{ backgroundColor: "#06d755" }}
      nextButtonTextStyle={{ color: "#FFF" }}
      prevButtonText={"Назад"}
      prevButtonStyle={{ backgroundColor: Colors.dark.purple }}
      prevButtonTextStyle={{ color: "#FFF" }}
      endButtonText={"Проверить"}
      endButtonStyle={{ backgroundColor: "#000" }}
      endButtonTextStyle={{ color: "#FFF" }}
      buttonsContainerStyle={{ marginTop: "auto" }}
      onEnd={(results) => {
        navigation.navigate("QuizResult", {
          results,
          awards: data.awards,
        });
      }}
      data={data.questions}
    />
  );
};

export default QuizScreen;
