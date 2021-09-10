import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        this.props.navigation.navigate('CardStack')
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={[Fonts.base, {fontSize: 36}]}>
                        Добро </Text>
                    <Text style={[Fonts.base, {fontSize: 36}]}>
                        пожаловать
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
                        colors={['#033273', '#830396']}
                        style={styles.btn}
                        start={{x: 0, y: .95}}
                        end={{x: 1, y: 1}}
                        >
                        <FontAwesome size={30} style={{ marginBottom: -3 }}  color={'white'} name={'code'} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btn: {
        padding: 16,
        paddingHorizontal: 64,
        borderRadius: 36,
    },
    welcomeContainer: {
        backgroundColor: Colors.dark.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 36,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        justifyContent: 'center',
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
