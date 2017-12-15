import {
  POSTS_SUCCESS,
  POST_DETAIL_SUCCESS,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  SORT_BY_VOTE,
  SORT_BY_DATE,
  SORT_BY_CATEGORY,
  POST_TO_EDIT,
  POST_EDITABLE
} from "../actions/actionTypes"

const INITIAL_POSTS_STATE = []

export const posts = (state = INITIAL_POSTS_STATE, action) => {
  switch (action.type) {
    case DELETE_POST_SUCCESS:
      return state.filter(p => p.id !== action.post.id)
    case POSTS_SUCCESS:
      return action.posts
    case POST_DETAIL_SUCCESS:
    case ADD_POST_SUCCESS:
    case EDIT_POST_SUCCESS:
      return [
        ...state.filter(p => p.id !== action.post.id),
        action.post
      ]
    case VOTE_POST_SUCCESS:
      return state.map(p => (
        p.id === action.post.id ? action.post : p
      ))
    case SORT_BY_VOTE:
      // sort by vote
      return [...state].sort((postA, postB) => postB.voteScore - postA.voteScore)
    case SORT_BY_DATE:
      // sort by date
      return [...state].sort((postA, postB) => postB.timestamp - postA.timestamp)
    case SORT_BY_CATEGORY:
      return [...state].sort((postA, postB) => {
        return postB.category < postA.category ? 1 : -1
      })
    default:
      return state
  }
}

const INITIAL_POST_TO_EDIT_STATE = {
  id: "",
  title: "",
  author: "",
  category: "",
  body: "",
  visible: false
}

export const postToEdit = (state = INITIAL_POST_TO_EDIT_STATE, action) => {
  switch (action.type) {
    case POST_TO_EDIT:
      return {
        ...action.post
      }
    default:
      return state
  }
}

export const postEditable = (state = false, action) => {
  switch (action.type) {
    case POST_EDITABLE:
      return action.editable
    default:
      return state
  }
}
