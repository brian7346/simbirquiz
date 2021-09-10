import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux';
import Fonts from '../constants/Fonts';
import Colors from "../constants/Colors";

const ndate = new Date();
const hours = ndate.getHours();

export const UserHeader = () => {
    const user = useSelector(state => state.user)
    const greeting = hours < 5 ? 'Доброй ночи' : hours < 12 ? 'Доброе утро' : hours < 18 ? 'Добрый день' : 'Добрый вечер';
    return (
        <View style={styles.container}>
            <Text style={[Fonts.base, styles.heading]}>{ greeting }, <Text style={[Fonts.bold, styles.heading]}>{ user.name }</Text></Text>
            <Image style={styles.avatar} source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
    },
    container: {
        paddingHorizontal: 20,
        height: 80,
        backgroundColor: Colors.dark.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    heading: {
        color: Colors.dark.text,
        fontSize: 24
    }
});
