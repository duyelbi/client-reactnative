import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, SectionList, TouchableOpacity, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  item: {
    backgroundColor: '#2133A0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: '#FA6900',
    fontSize: 54
  }
});


export default function ResultScreen({ route, navigation }) {
  const score = useState(route.params.score);
  const totalQuestion = useState(route.params.totalQuestion)
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Your Score:</Text>
        <Text style={styles.text}>{score}/{totalQuestion}</Text>
        <Button
          title="Go Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  )
}