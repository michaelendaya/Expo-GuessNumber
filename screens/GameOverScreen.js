import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import MainButton from '../Components/MainButton';
import color from '../constants/color';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.png')} resizeMode='cover' />
                {/* <Image style={styles.image} source={{

                    uri:'https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest?cb=20210124211652'
                }} resizeMode='cover' /> */}
            </View>
            <Text>Number of rounds:
                <Text style={styles.highlight}>
                    {props.roundsNumber}
                </Text>

            </Text>
            <Text>Number was:
                <Text style={styles.highlight}>
                    {props.userNumber}

                </Text>
            </Text>
            <MainButton onPress={props.onRestart} >
                NEW GAME
            </MainButton>
        </View>


    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius:  Dimensions.get('window').width * 0.7/2,
        overflow: 'hidden',
        marginVertical:Dimensions.get('window').height/20
    }
    , image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: color.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
