import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const Quiz = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.progress}>2/2</Text>
    <Text style={styles.title}>Does React Native work with Andriod?</Text>
    <TouchableOpacity style={styles.switch}>
      <Text style={{color: "red", fontSize: 20}}>Answer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor: "green"}]}>
      <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>Correct</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor: "red"}]}>
      <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>Incorrect</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progress: {
    alignSelf: "flex-start",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 100,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 15,
  },
  switch: {
    marginBottom: 100,
  },
  button: {
    width: 200,
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginBottom: 20,
  },
})

export default Quiz
