import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ImageBackground, ShadowPropTypesIOS } from 'react-native';
import Colors from "../constants/Colors";
import Carousel from 'react-native-snap-carousel';

export  class CardsCarousel extends React.Component{

    handleNavigate = () => {
        //this.props.navigation.navigate('Login');
    };

    constructor(props){
        super(props);
        this.state = {
          activeIndex:4}};


    _renderItem({item,index}){
        return (
            <View style={{width: 250, height: 250, backgroundColor: Colors.dark.second, borderColor: '#202333', borderStyle: 'solid', borderWidth: 5, }}>
                <ImageBackground source={{uri: item.uri}} resizeMode="cover" style={{ flex: 1, justifyContent: "center" }} >
                <View style={{
                    backgroundColor: Colors.dark.purple,
                    opacity: .8,
                    borderRadius: 15,
                    height: 170,
                    width: 200,
                    padding: 40,
                    marginLeft: 100,
                    marginTop: 25, 
                    }}>
                    <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
                    <Text style={{color: 'white'}}>{item.text}</Text>
                </View>
            </ImageBackground>
            </View>
        )
    }


    render (){
        const carouselItems = [
            {
                title:'Kotlin',
                text: 'Text 1',
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/kotlin-512.png'
            },
            {
                title:'Swift',
                text: 'Text 2',
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/332_Swift_logo-512.png'
            },
            {
                title:'Java',
                text: 'Text 3',
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'
            },
            {
                title:'NodeJs',
                text: 'Text 4',
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png'
            },
            {
                title: 'React Native',
                text: 'Text 5',
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
            }];

       return (
        <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 40 }}>
            <View style={{ flex: 1, flexDirection:'row',  justifyContent: 'center',}}>
                <Carousel
                    layout={"stack"}
                    layoutCardOffset={20}
                    ref={ref => this.carousel = ref}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    firstItem={4}
                     />  
            </View>
        </SafeAreaView>
    )}
}