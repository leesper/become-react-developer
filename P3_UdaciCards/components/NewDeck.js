import React from "react"
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from "react-native"

class NewDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deckTitle: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title} >What is the title of your new deck ?</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          onChangeText={(deckTitle) => this.setState({deckTitle})}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white", fontSize: 20}} >Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    fontSize: 50,
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    fontSize: 30,
    marginBottom: 40,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    textDecorationLine: "underline"
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center"
  }
})

export default NewDeck
