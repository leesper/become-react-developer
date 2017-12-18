"use strict"
import React from "react"
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native"

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

const ListItem = ({title, numOfCards}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{numOfCards} cards</Text>
  </View>
)

const DeckList = (props) => (
  <FlatList
    data={testData}
    keyExtractor={(item) => item.title}
    renderItem={({item}) => <ListItem key={item.title} title={item.title} numOfCards={item.numOfCards} />}
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

export default DeckList
