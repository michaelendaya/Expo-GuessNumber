import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const Card = props => {
    return (<View style={{ ...styles.card, ...props.style }}>
        {props.children}


    </View>)
}
const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.28,
        backgroundColor: '#fff',
        elevation: 5,
        padding: 20,
        borderRadius: 15
    },
});
export default Card;