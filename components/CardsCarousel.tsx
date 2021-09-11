import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ShadowPropTypesIOS,
} from "react-native";
import Colors from "../constants/Colors";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";

export class CardsCarousel extends React.Component {

  handleNavigate = (course) => {
    this.props.navigation.navigate("Quiz", course);
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.handleNavigate({ title: item.title })}
        activeOpacity={1}
      >
        <LinearGradient
          colors={[Colors.dark.darkGray, Colors.dark.lightGray]}
          style={styles.shadow}
        >
          <ImageBackground
            source={{ uri: item.uri }}
            resizeMode="contain"
            style={{ flex: 1, justifyContent: "center" }}
          ></ImageBackground>
        </LinearGradient>

        <View
          style={{
            position: "absolute",
            left: -120,
            bottom: 0,
            backgroundColor: "#303065",
            opacity: 0.9,
            borderRadius: 32,
            height: 160,
            width: 220,
            padding: 40,
            marginLeft: 100,
            marginTop: 25,
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
          <Text style={{ color: "white" }}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const carouselItems = [
      {
        id: 1,
        title: "React Native",
        text: "Text 5",
        uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        id: 1,
        title: "Kotlin",
        text: "Text 1",
        uri: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/kotlin-512.png",
      },
      {
        id: 1,
        title: "Swift",
        text: "Text 2",
        uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/332_Swift_logo-512.png",
      },
      {
        id: 1,
        title: "Java",
        text: "Text 3",
        uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
      },
      {
        id: 1,
        title: "NodeJs",
        text: "Text 4",
        uri: "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png",
      },
    ];

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Carousel
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
          layout={"stack"}
          layoutCardOffset={12}
          ref={(ref) => (this.carousel = ref)}
          data={carouselItems}
          sliderWidth={380}
          itemWidth={300}
          renderItem={this._renderItem}
          firstItem={0}
        />
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={this.state.activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    marginHorizontal: 16,
    borderRadius: 32,
    marginBottom: 32,
    padding: 36,
    width: 280,
    height: 240,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "red",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});
