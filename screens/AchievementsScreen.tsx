import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Fonts from "../constants/Fonts";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";

const DATA = [
  {
    id: "0",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/1.png`),
  },
  {
    id: "1",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/2.png`),
  },
  {
    id: "2",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/3.png`),
  },
  {
    id: "3",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/4.png`),
  },
  {
    id: "4",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/5.png`),
  },
  {
    id: "5",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/6.png`),
  },
  {
    id: "6",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/7.png`),
  },
  {
    id: "7",
    title: "Взлетный старт",
    subtitle: "Откройте в себе силу",
    icon: require(`../assets/images/8.png`),
  },
];

class AchievementsScreen extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  renderItem = ({ item: { icon, name, description, unlocked } }) => (
    <LinearGradient
      colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
      style={[styles.shadow, !unlocked && styles.locked]}
      start={{ x: 0, y: 0.7 }}
      end={{ x: 2, y: 1 }}
    >
      <View style={styles.achievementView}>
        <View style={styles.achievement}>
          <Image style={styles.achievementIcon} source={icon} />
        </View>
        <View style={styles.achievementText}>
          <Text style={[Fonts.base, styles.textTytle]}>{name}</Text>
          <Text style={[Fonts.base, styles.textSubtitle]}>{description}</Text>
        </View>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            marginLeft: 16,
          }}
          onPress={this.goBack}
        >
          <FontAwesome
            size={25}
            style={{ marginBottom: -3 }}
            color={Colors.dark.text}
            name="chevron-left"
          />
        </TouchableOpacity>
        <View style={styles.viewStyle}>
          <Text style={[Fonts.base, { fontSize: 18, textAlign: "center" }]}>
            Мои достижения
          </Text>
          <FlatList
            data={this.props?.achievements}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    achievements: state.achievements || [],
  };
};

export default connect(mapStateToProps, null)(AchievementsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 40,
    padding: 16,
  },
  locked: {
    opacity: .3
  },
  textTytle: {
    fontSize: 16,
  },
  textSubtitle: {
    fontSize: 12,
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
});
