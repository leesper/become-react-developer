"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation"
import NewDeck from './components/NewDeck'
import DeckList from "./components/DeckList"
import Deck from "./components/Deck"
import Quiz from "./components/Quiz"
import NewQuestion from "./components/NewQuestion"

const tabNavConfig = {
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

const stackNavConfig = {
  navigationOptions: {
    headerTitleStyle: {
      fontSize: 20
    }
  }
}

const MainScreen = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "DECKS"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "NEW DECK"
    }
  }
}, tabNavConfig)

const HomeScreen = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: "HOME"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "DECK"
    }
  },
}, stackNavConfig)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HomeScreen />
      </View>
    )
  }
}
