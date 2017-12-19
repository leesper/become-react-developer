"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation"
import NewDeck from './components/NewDeck'
import DeckList from "./components/DeckList"
import Deck from "./components/Deck"
import Quiz from "./components/Quiz"
import NewQuestion from "./components/NewQuestion"

const DeckListScreen = () => ( <DeckList /> )
const NewDeckScreen = () => ( <NewDeck /> )

const navigatorConfig = {
  tabBarOptions: {
    labelStyle: {
      fontSize: 20,
      textAlign: "center"
    },
    tabStyle: {
      borderBottomColor: "yellow"
    }
  }
}

const MainScreen = TabNavigator({
  "Decks": {
    screen: DeckListScreen,
    navigationOptions: {
      tabBarLabel: "DECKS"
    }
  },
  "New Deck": {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: "NEW DECK"
    }
  }
}, navigatorConfig)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}} />
        <NewQuestion />
      </View>
    )
  }
}
