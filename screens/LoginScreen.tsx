import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../types';
import Colors from "../constants/Colors";
import LottieView from 'lottie-react-native';
import {PureComponent, useEffect, useRef} from "react";
import Fonts from "../constants/Fonts";
import { LinearGradient } from 'expo-linear-gradient';
import {FontAwesome} from "@expo/vector-icons";

export default class LoginScreen extends PureComponent {
    private animation: any;

    componentDidMount() {
        this.animation.play();

        console.log(this.props)
    }

    handleNavigate = () => {
        this.props.navigation.navigate('Quiz')
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={[Fonts.base, {fontSize: 32}]}>
                        Добро пожаловать</Text>
                    <Text style={[Fonts.bold, {fontSize: 42}]}>
                        Андрей,
                    </Text>
                    <Text style={[Fonts.base]}>
                        готов узнать что то новое?
                    </Text>
                </View>

                <LottieView
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 400,
                        height: 200,
                        marginVertical: '15%'
                    }}
                    source={require('../assets/wavesAnimation.json')}
                />
                <TouchableOpacity activeOpacity={.8} onPress={this.handleNavigate}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#61ADE3', '#6B4ADD']}
                        style={styles.btn}
                        start={{x: 0, y: .95}}
                        end={{x: 1, y: 1}}
                        >
                        <FontAwesome size={30} style={{ marginBottom: -3 }}  color={ Colors.dark.text} name={'code'} />
                        <Text style={[Fonts.bold, {color: Colors.dark.text, fontSize: 24}]}> Приступим </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btn: {
        justifyContent: "space-around",
        padding: 16,
        marginHorizontal: 64,
        borderRadius: 32,
        flexDirection: 'row'
    },
    welcomeContainer: {
        backgroundColor: Colors.dark.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 32,
        // padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        // alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
