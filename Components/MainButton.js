import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../constants/color';
const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.85} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: color.primary,
        paddingVertical: 12,
        borderRadius:25,
        paddingHorizontal: 30
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'open-sans'
    }
})
export default MainButton