import React from "react";
import QuizSingleChoice from "../components/QuizSingleChoice";
import Colors from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

const QuizScreen = () => {

    const navigation = useNavigation()

    const data = [
        {
            question:
                "В прототипном наследовании экземпляры наследуются от других экземпляров. /n Это?",
            optionA: "Прототип",
            optionB: "Наследование",
            answer: "Прототип",
        },
        // {
        //     question: "Как узнать есть ли св-во у объекта или оно находится в цепочке прототипов?",
        //     optionA: "hasOwnProperty",
        //     optionB: "objectKeys",
        //     answer: "Francophone",
        // },
        // {
        //     question: "Сколько может быть прототипов у одного объекта?",
        //     optionA: "Один",
        //     optionB: "Шесть",
        //     optionC: "Сколько угодно",
        //     answer: "Один",
        // },
        // {
        //     question: "Проверяет принадлежность экземпляра какому то классу?",
        //     optionA: "instanceof",
        //     optionB: "typeof",
        //     answer: "instanceof",
        // },   {
        //     question: "Замыкания комбинация функции и лексического окружения, \t\t\tдругими словами область памяти созданная функцией в которой \tесть доступ к переменным созданным в этой функции\n?",
        //     optionA: "замыкания",
        //     optionB: "область видимости",
        //     answer: "замыкания",
        // },
    ];
    return (
        <QuizSingleChoice
            containerStyle={{ backgroundColor: Colors.dark.background, paddingTop: 30 }}
            questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
            responseStyle={{
                borderRadius: 15,
            }}
            responseTextStyle={{ fontSize: 14, fontWeight: "normal" }}
            selectedResponseStyle={{
                borderRadius: 15,
                backgroundColor: "#fa5541",
            }}
            selectedResponseTextStyle={{
                fontSize: 14,
                fontWeight: "normal",
            }}
            responseRequired={true}
            nextButtonText={"Дальше"}
            nextButtonStyle={{ backgroundColor: "#06d755" }}
            nextButtonTextStyle={{ color: "#FFF" }}
            prevButtonText={"Назад"}
            prevButtonStyle={{ backgroundColor:Colors.dark.purple }}
            prevButtonTextStyle={{ color: "#FFF" }}
            endButtonText={"Проверить"}
            endButtonStyle={{ backgroundColor: "#000" }}
            endButtonTextStyle={{ color: "#FFF" }}
            buttonsContainerStyle={{ marginTop: "auto" }}
            onEnd={(results) => {
                navigation.navigate('QuizResult', results)
            }}
            data={data}
        />
    );
};

export default QuizScreen;
