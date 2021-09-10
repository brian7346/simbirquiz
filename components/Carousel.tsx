import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux';
import Fonts from '../constants/Fonts';
import Colors from "../constants/Colors";
import Carousel from 'react-native-snap-carousel';



export class CardsCarousel extends Component {
 
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
 
    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={300}
              itemWidth={300}
            />
        );
    }
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