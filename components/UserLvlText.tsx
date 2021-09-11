import React from 'react';
import { useSelector } from 'react-redux';
import Fonts from '../constants/Fonts';
import { View, Text, StyleSheet } from 'react-native';

export const UserLvlText = () => {
    const user = useSelector(state => state.user);
    return (
        <View style={styles.container}>
          <Text style={[Fonts.bold, { fontSize: 25}]}>{ user.lvl } </Text>
          <Text style={[Fonts.bold, { fontSize: 20 }]}>уровень</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginHorizontal: 10,
    },
  });
  
