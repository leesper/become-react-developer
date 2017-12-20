import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isAnswer: false,
      corrects: 0
    }
  }

  render() {
    const { navigation } = this.props
    const questions = navigation.state.params.questions

    if (this.state.index === questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            You have correctly answered {this.state.corrects} questions out of {questions.length}
          </Text>
          <TouchableOpacity style={[styles.button, {backgroundColor: "white"}]} onPress={this.resetQuestions}>
            <Text style={{textAlign: "center", fontSize: 20, color: "black"}}>Test Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: "black"}]}
            onPress={() => navigation.goBack()}
            >
            <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>Return</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.progress}>
          {this.state.index+1}/{questions.length}
        </Text>
        <Text style={styles.title}>
          {
            this.state.isAnswer ?
            questions[this.state.index].answer :
            questions[this.state.index].question
          }
        </Text>
        <TouchableOpacity style={styles.switch} onPress={this.handleShowAnswer}>
          <Text style={{color: "red", fontSize: 20}}>{this.state.isAnswer ? "Question" : "Answer"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "green"}]} onPress={() => this.handleQuiz(true)}>
          <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "red"}]} onPress={() => this.handleQuiz(false)}>
          <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleShowAnswer = () => {
    this.setState((prev, props) => ({
      isAnswer: !prev.isAnswer
    }))
  }

  resetQuestions = () => {
    this.setState({
      index: 0,
      isAnswer: false,
      corrects: 0
    })
  }

  handleQuiz = (isCorrect) => {
    const increment = isCorrect ? 1 : 0
    this.setState((prev, props) => ({
      index: prev.index + 1,
      corrects: prev.corrects + increment
    }))
  }
}

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
