"use strict"
import React from "react"
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native"
import { saveDeckTitle } from "../actions/actionCreators"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

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
          ref={input => { this.textInput = input }}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={{color: "white", fontSize: 20}} >Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

  handleSubmit = () => {
    Keyboard.dismiss()
    if (this.state.deckTitle && this.state.deckTitle !== "") {
      this.props.saveDeckTitle(this.state.deckTitle)
      this.props.navigation.goBack()
      this.textInput.clear()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
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
    textDecorationLine: "underline",
    paddingLeft: 5,
    paddingVertical: 5,
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

const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators({saveDeckTitle}, dispatch)
)

export default connect(null, mapDispatchToProps)(NewDeck)
