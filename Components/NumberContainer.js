import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/color";
const NumberContainer = props => {
    return (
        <View style={style.container}>
            <Text style={style.number}>{props.children}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: color.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    number: {
        color: color.accent,
        fontSize: 22
    }
})
export default NumberContainer;