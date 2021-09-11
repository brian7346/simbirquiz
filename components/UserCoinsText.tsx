import React from "react";
import { useSelector } from "react-redux";
import Fonts from "../constants/Fonts";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const UserCoinsText = ({handleShopNavigate}) => {
  const user = useSelector((state) => state.user);
  return (
    <TouchableOpacity onPress={handleShopNavigate} style={styles.container}>
      <Text style={[Fonts.bold, { fontSize: 25 }]}>{user.coins} </Text>
      <Text style={[Fonts.bold, { fontSize: 20 }]}>монет</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
