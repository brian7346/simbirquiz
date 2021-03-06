import React from "react";
import { Text, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

interface ButtonProps {
  text: string;
  icon?: string;
  onPress: () => void;
  gradient?: string[];
  styles: ViewStyle;
  textStyle?: TextStyle;
}

export const SSButton = ({
  text,
  icon,
  onPress,
  styles,
  textStyle,
  gradient = ["#61ADE3", "#6B4ADD"],
}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
      <LinearGradient
        colors={gradient}
        style={styles}
        start={{ x: 0, y: 0.95 }}
        end={{ x: 1, y: 1 }}
      >
        <FontAwesome
          size={30}
          style={{ marginBottom: -3 }}
          color={Colors.dark.text}
          name={icon}
        />
        <Text
          style={[
            Fonts.bold,
            { color: Colors.dark.text, fontSize: 24 },
            textStyle,
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
