"use strict"
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const Deck = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{navigation.state.params.title}</Text>
    <Text style={styles.subTitle}>{navigation.state.params.numOfCards} cards</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("AddCard")}
      >
      <Text style={{fontSize: 20}}>Add Card</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, {backgroundColor: "black"}]}
      onPress={() => navigation.navigate("StartQuiz")}
      >
      <Text style={{color: "white", fontSize: 20}}>Start Quiz</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 30,
    color: "gray",
    marginBottom: 280,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginBottom: 20,
  },
})

export default Deck
