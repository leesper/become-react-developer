import {
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from "./actionTypes"

export const saveDeckTitle = (title) => ({type: SAVE_DECK_TITLE, title})
export const addCardToDeck = (title, card) => ({type: ADD_CARD_TO_DECK, title, card})
