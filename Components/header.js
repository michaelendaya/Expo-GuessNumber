import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import color from '../constants/color';
const Header = props => {
    return (
        <View style={styles.Header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    )
};


const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'open-sans-bold'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18

    }
})
export default Header;