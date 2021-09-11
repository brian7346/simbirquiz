import * as React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, FlatList } from "react-native";

import { RootStackScreenProps } from "../types";
import Colors from "../constants/Colors";
import map from "lodash/map";
import filter from "lodash/filter";
import Fonts from "../constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";

export default function QuizResult({
  route: { params },
}: RootStackScreenProps<"NotFound">) {
  console.log();
  
  const shopData = [
    {
      id: 1,
      title: 'Кружка',
      price: 3,
      imageUri: 'http://placekitten.com/200/300'
    },
    
    {
      id: 2,
      title: 'Футболка',
      price: 150,
      imageUri: 'http://placekitten.com/200/300'
    },
  ]
  
  const _renderItem = ({item}, key) => {
  
    console.log(item);
    
    return <View key={key} style={styles.item}>
      <Text style={[Fonts.base, {textAlign: 'center'}]}>{item.title}</Text>
      <Image style={styles.image} source={{uri: item.imageUri}}/>
      <Text style={Fonts.base}>{item.price} монеты</Text>
    </View>
  }
  return (
     <LinearGradient
        style={styles.container}
        colors={[ Colors.dark.darkGray, Colors.dark.lightGray,]}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 2, y: 1 }}
      >
        <Text style={[Fonts.base, {marginBottom: 16}]}>
         Доступные товары
        </Text>
        <FlatList numColumns={2}  showsVerticalScrollIndicator={false}   columnWrapperStyle={{justifyContent: 'space-between'}}
 data={shopData} renderItem={_renderItem}  />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 70,
    marginVertical: 12,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
  container: {
    paddingTop: 60,
    flex: 1,
    flexDirection: "column",
    borderRadius: 24,
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 24,
  },
  achievements: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    width: '48%',
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    marginBottom: 16,
  },
});
