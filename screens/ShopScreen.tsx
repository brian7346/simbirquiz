import * as React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

import { RootStackScreenProps } from "../types";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { find, map, indexOf } from "lodash";
import {useDispatch} from "react-redux";
import {order} from "../store/user/reducer";
import { useSelector } from "react-redux";

const shopData = [
  {
    id: 1,
    title: "Кружка",
    price: 42,
    imageUri: "http://placekitten.com/200/300",
  },

  {
    id: 2,
    title: "Футболка",
    price: 33,
    imageUri: "http://placekitten.com/g/200/300",
  },
  {
    id: 3,
    title: "Кепка",
    price: 23,
    imageUri: "http://placekitten.com/200/300",
  },
];

export default function ShopScreen({
  route: { params },
}: RootStackScreenProps<"NotFound">) {
  const [selectedGoods, setSelectedGoods] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const goBack = () => {
    navigation.goBack();
  };

  const handleOrder = () => {
    let count = 0
    map(selectedGoods, (id) => {
      count += find(shopData, ["id", id]).price
    });
    if (user.coins > count) {
      Alert.alert("Успешно!", "Мы свяжемся с Вами в течении нескольких дней");
      dispatch(order({coins: count}));
    } else {
      Alert.alert('Внимание!', 'Недостаточно монет')
    }
    navigation.goBack();

  };

  const selectGood = (id: number) => {
    const isSelected = indexOf(selectedGoods, id) !== -1;
    let selectedGoodsClone = [...selectedGoods];
    if (isSelected) {
      const index = indexOf(selectedGoods, id);
      setSelectedGoods(selectedGoodsClone.splice(index, 1));
    } else {
      selectedGoodsClone.push(id);
    }
    setSelectedGoods(selectedGoodsClone);
  };

  const _renderItem = ({ item }, key) => {
    const isSelected = indexOf(selectedGoods, item.id) !== -1;

    return (
      <TouchableOpacity
        onPress={() => selectGood(item.id)}
        key={key}
        style={[styles.item, isSelected && styles.itemSelected]}
      >
        <Image style={styles.image} source={{ uri: item.imageUri }} />
        <Text style={[Fonts.base, { textAlign: "center", fontSize: 16 }]}>
          {item.title}
        </Text>
        <Text style={[Fonts.base, { textAlign: "center", fontSize: 12 }]}>
          {item.price} монеты
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          marginLeft: 16,
        }}
        onPress={goBack}
      >
        <FontAwesome
          size={25}
          style={{ marginBottom: -3 }}
          color={Colors.dark.text}
          name="chevron-left"
        />
      </TouchableOpacity>

      <Text
        style={[
          Fonts.base,
          { marginVertical: 16, fontSize: 18, textAlign: "center" },
        ]}
      >
        Доступные товары
      </Text>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
        data={shopData}
        renderItem={_renderItem}
      />
      <TouchableOpacity
        style={!selectedGoods.length && styles.disabled}
        disabled={!selectedGoods.length}
        onPress={handleOrder}
      >
        <LinearGradient
          colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
          style={styles.shadow}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 2, y: 1 }}
        >
          <Text style={[Fonts.base, styles.textStyle]}>Заказать</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 70,
    marginVertical: 12,
  },
  shadow: {
    margin: 20,
    borderRadius: 24,
    marginBottom: 16,
    padding: 12,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 40,
    padding: 16,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 24,
  },
  achievements: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    padding: 12,
    width: "48%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 17,
    marginBottom: 16,
  },
  itemSelected: {
    backgroundColor: "#331652",
  },
  disabled: {
    opacity: 0.5,
  },
});
