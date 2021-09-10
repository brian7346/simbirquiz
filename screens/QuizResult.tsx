import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { RootStackScreenProps } from "../types"
import Colors from "../constants/Colors";
import map from 'lodash/map';
import filter from "lodash/filter"
export default function QuizResult({
  route,
}: RootStackScreenProps<"NotFound">) {
  const getSuccess = (): boolean => {
    map(route, (result: any) => {
      console.log(result)
    });
    return true
  };
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        {getSuccess() ? (
          <Text style={styles.title}>Поздравляем! </Text>
        ) : (
          <Text style={styles.title}>
            Кажется вы усвоили не все, давайте повторим!{" "}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 60,
    marginHorizontal: 24,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
