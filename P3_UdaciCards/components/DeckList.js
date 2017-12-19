"use strict"
import React from "react"
import { Text, View, FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { pluralCards } from "../utils"

const testData = [
  {
    title: "udacicards",
    numOfCards: 3
  },
  {
    title: "new deck",
    numOfCards: 0
  },
  {
    title: "New deck 2",
    numOfCards: 0
  },
  {
    title: "New deck 3",
    numOfCards: 0
  },
  {
    title: "New deck 4",
    numOfCards: 0
  },
  {
    title: "New deck 5",
    numOfCards: 0
  },
  {
    title: "New deck 6",
    numOfCards: 0
  },
  {
    title: "New deck 7",
    numOfCards: 0
  },
  {
    title: "New deck 8",
    numOfCards: 0
  },
  {
    title: "New deck 9",
    numOfCards: 0
  }
]

const ListItem = ({title, questions, navigation}) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Deck", {title, questions})}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{pluralCards(questions.length)}</Text>
  </TouchableOpacity>
)

const DeckList = ({ decks, navigation }) => (
  <FlatList
    data={decks}
    keyExtractor={(item) => item.title}
    renderItem={
      ({item}) =>
      <ListItem
        key={item.title}
        title={item.title}
        questions={item.questions}
        navigation={navigation}
      />
    }
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingTop: 40,
    paddingBottom: 40
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 20,
    color: "gray"
  }
})

const mapStateToProps = (state, ownProps) => {
  const titles = Object.keys(state)
  return {
    decks: titles.map(title => ({title, questions: state[title].questions}))
  }
}

export default connect(mapStateToProps, null)(DeckList)
