import {
  COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  COMMENT_TO_EDIT,
  COMMENT_EDITABLE
} from "../actions/actionTypes"

const INITIAL_COMMENTS_STATE = []

export const comments = (state = INITIAL_COMMENTS_STATE, action) => {
  switch (action.type) {
    case COMMENTS_SUCCESS:
      return action.comments
    case ADD_COMMENT_SUCCESS:
      console.log("COMMENT", action.comment)
      return [
        ...state,
        action.comment
      ]
    case EDIT_COMMENT_SUCCESS:
    case VOTE_COMMENT_SUCCESS:
      return state.map(comment => {
        return comment.id === action.comment.id ? action.comment : comment
      })
    case DELETE_COMMENT_SUCCESS:
      return state.filter(comment => comment.id !== action.comment.id)
    default:
      return state
  }
}

const INITIAL_COMMENT_TO_EDIT = {
  id: "",
  author: "",
  body: "",
  visible: false
}

export const commentToEdit = (state = INITIAL_COMMENT_TO_EDIT, action) => {
  switch (action.type) {
    case COMMENT_TO_EDIT:
      return {
        ...action.comment
      }
    default:
      return state
  }
}

export const commentEditable = (state = false, action) => {
  switch (action.type) {
    case COMMENT_EDITABLE:
      return action.editable
    default:
      return state
  }
}
