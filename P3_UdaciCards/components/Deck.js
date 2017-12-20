"use strict"
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native"
import { pluralCards } from "../utils"
import { connect } from "react-redux"

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleOpacity: new Animated.Value(0),
      subTitleOpacity: new Animated.Value(0)
    }
  }

  componentDidMount() {
    const { titleOpacity, subTitleOpacity } = this.state
    Animated.timing(titleOpacity, { toValue: 1, duration: 2000}).start()
    Animated.timing(subTitleOpacity, { toValue: 1, duration: 2000}).start()
  }

  render() {
    const { navigation, questions } = this.props
    const { titleOpacity, subTitleOpacity} = this.state
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[styles.title, { opacity: titleOpacity }]}
          >
          {navigation.state.params.title}
        </Animated.Text>
        <Animated.Text
          style={[styles.subTitle, { opacity: subTitleOpacity }]}
          >
          {pluralCards(questions.length)}
        </Animated.Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCard", {title: navigation.state.params.title})}
          >
          <Text style={{fontSize: 20}}>Add Card</Text>
        </TouchableOpacity>
        {
          questions.length > 0 &&
          <TouchableOpacity
            style={[styles.button, {backgroundColor: "black"}]}
            onPress={
              () => navigation.navigate("StartQuiz", {
                questions: questions
              })
            }
            >
              <Text style={{color: "white", fontSize: 20}}>Start Quiz</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

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

const mapStateToProps = (state, ownProps) => ({
  questions: state[ownProps.navigation.state.params.title].questions
})

export default connect(mapStateToProps, null)(Deck)
