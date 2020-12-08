import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, SectionList, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#69D2E7',
        margin: 10,
        width: '70%',
        padding: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonSelected: {
        backgroundColor: 'orange',
        margin: 10,
        width: '70%',
        padding: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        color: '#fff',
    }
});

export default function ButtonAnswer(prop) {
    var arrayAnswer = prop.ListAnswers
    var userAnswer  = prop.userAnswer
    var buttonAnswer = arrayAnswer.map((values, index) =>
        <TouchableOpacity style = {styles.button} key={index}
        onPress={() =>prop.selectButton(values)}
        >
            <Text style = {styles.text}>{values}</Text>
        </TouchableOpacity>
    )

    return (
        <View style = {styles.container}>{buttonAnswer}</View>
    )
}