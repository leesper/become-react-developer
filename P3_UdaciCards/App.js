"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation"
import { createStore } from "redux"
import { Provider } from "react-redux"
import NewDeck from './components/NewDeck'
import DeckList from "./components/DeckList"
import Deck from "./components/Deck"
import Quiz from "./components/Quiz"
import NewQuestion from "./components/NewQuestion"
import reducer from "./reducers"
import configureStore from "./store"
import { setLocalNotification } from "./utils"

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
  AddCard: {
    screen: NewQuestion,
    navigationOptions: {
      title: "NEW CARD"
    }
  },
  StartQuiz: {
    screen: Quiz,
    navigationOptions: {
      title: "QUIZ"
    }
  },
}, stackNavConfig)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const { persistor, store } = configureStore()
    return (
      <Provider store={store} persistor={persistor}>
        <View style={{flex: 1}}>
          <HomeScreen />
        </View>
      </Provider>
    )
  }
}
