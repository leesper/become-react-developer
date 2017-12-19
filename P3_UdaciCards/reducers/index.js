import {
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from "../actions/actionTypes"

const INITIAL_STATE = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_DECK_TITLE:
      return state[action.title] ?
      state :
      {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD_TO_DECK:
      return state[action.title] ?
      {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [
            ...state[action.title].questions,
            card
          ]
        }
      } :
      {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [
            card
          ]
        }
      }
    default:
      return state
  }
}

export default reducer
