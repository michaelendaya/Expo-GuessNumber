import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView, Alert, Dimensions } from 'react-native'
import BodyText from '../Components/BodyText';
import Card from '../Components/Card';
import Input from '../Components/Input';
import MainButton from '../Components/MainButton';
import NumberContainer from '../Components/NumberContainer';
import color from '../constants/color';
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const nameInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        setConfirmed(true);
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) | chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be between 1-99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }])
            return;
        }
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    };

    let confimedOutput;
    if (confirmed) {
        confimedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>

                <MainButton onPress={props.onStartGame.bind(this, selectedNumber)}>
                    START GAME
                </MainButton>
            </Card>
        )
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a New Game!</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Select a Number</Text>
                            <Input value={enteredValue} onChangeText={nameInputHandler} style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} />
                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>

                                    <Button title="Reset" color={color.primary} onPress={resetInputHandler} /></View>
                                <View style={styles.button}>

                                    <Button title="Confirm" color={color.accent} onPress={confirmInputHandler} /></View>
                            </View>
                        </Card>
                        {confimedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    button: {
        // width: 100
        width: Dimensions.get('window').width / 4
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})
export default StartGameScreen;