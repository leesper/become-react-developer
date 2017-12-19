import React from "react"
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native"

const NewQuestion = () => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <TextInput style={styles.input} placeholder="Question"></TextInput>
    <TextInput style={styles.input} placeholder="Answer"></TextInput>
    <TouchableOpacity style={styles.button} onPress={Keyboard.dismiss} >
      <Text style={{color: "white", fontSize: 20, textAlign: "center"}}>Submit</Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 25,
    marginBottom: 60,
    marginHorizontal: 30,
    paddingLeft: 5,
    paddingVertical: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "black",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
})

export default NewQuestion
