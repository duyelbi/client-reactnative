import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, SectionList, TouchableOpacity, Button } from 'react-native';

import axios from 'axios';

import ButtonAnswer from '../components/Button';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#2133A0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    question: {
        fontSize: 32,
    },
    text: {
        color: '#FA6900',
    }
});

export default function QuestionScreen({ route, navigation }) {
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [incorrectAnswers, setIncorrectAnswer] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(route.params.score);
    const [totalQuestion] = useState(5);
    const [currentQuestion, setCurrentQuestion] = useState(route.params.currentQuestion)

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=1')
            // axios.get('http://127.0.0.1:8080/questionAnswer')
            .then(res => {
                var quiz = res.data.results[0]
                console.log(res.data.results)

                setQuestion(quiz.question)
                setCorrectAnswer(quiz.correct_answer)
                setIncorrectAnswer(quiz.incorrect_answers)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    var arrayAnswer = incorrectAnswers.concat(correctAnswer);
    console.log(arrayAnswer)


    // random answer in array
    // function shuffle(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {

    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;

    //         // And swap it with the current element.
    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    // }

    var currentIndex = arrayAnswer.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arrayAnswer[currentIndex];
        arrayAnswer[currentIndex] = arrayAnswer[randomIndex];
        arrayAnswer[randomIndex] = temporaryValue;
    }

    // Used like so
    // arrayAnswer = shuffle(arrayAnswer);
    console.log(arrayAnswer);


    // const handleButtonClick = (values) => {
    //     console.log(values)
    //     console.log(correctAnswer)
    //     if (values === correctAnswer) {
    //         console.log('ok');
    //         setScore(score + 1);
    //     }
    //     console.log(score)
    //     setUserAnswer(values)
    //     console.log(userAnswer)
    //     // checkAnswer()

    //     if (currentQuestion < totalQuestion) {
    //         navigation.push('Questions', {
    //             currentQuestion: currentQuestion + 1,
    //             score: score
    //         })
    //     } else {
    //         navigation.navigate('Result')
    //     }
    // }

    // function checkAnswer() {
    //     setScore(score + 1)
    //     // if (userAnswer === correctAnswer) {
    //     //     setScore(score +1);
    //     // }
    //     console.log(score);
    // }


    var button = currentQuestion < totalQuestion ?
        <Button title="next" onPress={() => navigation.push('Questions', {
            currentQuestion: currentQuestion + 1,
            score: score
        })} /> : <Button title="Go Result" onPress={(values) => {
            setUserAnswer(values)
            console.log(userAnswer)

            if (currentQuestion < totalQuestion) {
                navigation.push('Questions', {
                    currentQuestion: currentQuestion + 1,
                    score: score + 1
                })
            } else {
                navigation.navigate('Result', {
                    totalQuestion: totalQuestion,
                    score: score
                })
            }
        }} />


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Questions Screen</Text>
            <Text style={styles.text}>Quiz: {currentQuestion}</Text>
            <Text style={styles.text}>{question}</Text>
            <ButtonAnswer
                ListAnswers={arrayAnswer}
                userAnswer={userAnswer}
                selectButton={(values) => {
                    setUserAnswer(values)
                    console.log(userAnswer)

                    if (currentQuestion < totalQuestion) {
                        navigation.push('Questions', {
                            currentQuestion: currentQuestion + 1,
                            score: score + 1
                        })
                    } else {
                        navigation.navigate('Result', {
                            totalQuestion: totalQuestion,
                            score: score + 1
                        })
                    }
                }}
            />
            <View>{button}</View>
            <Text style={styles.text}>your score:{score}/{totalQuestion}</Text>
        </View>
    );
}