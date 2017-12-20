import React from "react"
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addCardToDeck } from "../actions/actionCreators"

class NewQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          ref={input => this.questionInput = input}
        />
        <TextInput
          style={styles.input}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          ref={input => this.answerInput = input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
          >
          <Text style={{color: "white", fontSize: 20, textAlign: "center"}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

  handleSubmit = () => {
    if (this.state.question !== "" && this.state.answer !== "") {
      const title = this.props.navigation.state.params.title
      const card = {
        question: this.state.question,
        answer: this.state.answer
      }
      Keyboard.dismiss()
      this.props.addCardToDeck(title, card)
      this.questionInput.clear()
      this.answerInput.clear()
      this.props.navigation.goBack()
    }
  }
}

// const NewQuestion = () => (
//   <KeyboardAvoidingView behavior="padding" style={styles.container}>
//     <TextInput style={styles.input} placeholder="Question"></TextInput>
//     <TextInput style={styles.input} placeholder="Answer"></TextInput>
//     <TouchableOpacity style={styles.button} onPress={Keyboard.dismiss} >
//       <Text style={{color: "white", fontSize: 20, textAlign: "center"}}>Submit</Text>
//     </TouchableOpacity>
//   </KeyboardAvoidingView>
// )

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

const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators({
    addCardToDeck
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(NewQuestion)
