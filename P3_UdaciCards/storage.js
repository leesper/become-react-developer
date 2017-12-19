"use strict"
import { AsyncStorage } from "react-native"

const CARDS_STORAGE_KEY = "UdaciCards:decks"

// get all decks available
export const getDecks = () => {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((results) => (JSON.parse(results)))
}

// get deck associated with deckID
export const getDeck = (deckID) => {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results)
    return decks[deckID]
  })
}

// save new deck to deck set, if deckID already existed, nothing will change
export const saveDeckTitle(deckID) => {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results)
    if (!decks[deckID]) {
      decks[deckID] = {
        title: deckID,
        questions: []
      }
      AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(decks))
    }
  })
}

// add card to associated deck, card must be an object with "question" and "answer" as key
export const addCardToDeck(deckID, card) => {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results)
    if (!decks[deckID]) {
      decks[deckID] = {
        title: deckID,
        questions: []
      }
    }
    decks[deckID].questions.push(card)
    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(decks))
  })
}
