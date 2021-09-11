import React from 'react';
import { useSelector } from 'react-redux';
import Fonts from '../constants/Fonts';
import { View, Text, StyleSheet } from 'react-native';

export const UserCoinsText = () => {
    const user = useSelector(state => state.user);
    return (
        <View style={styles.container}>
          <Text style={[Fonts.bold, { fontSize: 25}]}>{ user.coins } </Text>
          <Text style={[Fonts.bold, { fontSize: 20 }]}>монет</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      alignItems: "center",
    },
  });

