import { combineReducers } from "redux"
import {
  CATEGORIES_SUCCESS,
  POSTS_SUCCESS,
  COMMENTS_SUCCESS,
  POST_DETAIL_SUCCESS,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  CATEGORY_CHANGE,
  SORT_BY_VOTE, SORT_BY_DATE, SORT_BY_CATEGORY,
  POST_TO_EDIT, COMMENT_TO_EDIT,
  POST_EDITABLE, COMMENT_EDITABLE
} from "../actions"

const categoryRoot = {
  name: "全部",
  path: "/"
};

// design of state
// {
//   categories: [],
//   posts: [],
//   comments: [],
//   category: {
//     name: "root",
//     path: "/"
//   },
//   postToEdit: {
//     id,
//     title,
//     author,
//     category,
//     body,
//     visible
//   },
//   commentToEdit: {
//     id,
//     author,
//     body,
//     visible
//   },
//   postEditable: false,
//   commentEditable: false
// }

const categories = (state = [categoryRoot], action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return [
        categoryRoot,
        ...action.categories
      ]
    default:
      return state;
  }
}

const posts = (state = [], action) => {
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


const comments = (state = [], action) => {
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

const category = (state = categoryRoot, action) => {
  switch (action.type) {
    case CATEGORY_CHANGE:
      return action.category;
    default:
      return state;
  }
};

const postToEdit = (state = {
  id: "",
  title: "",
  author: "",
  category: "",
  body: "",
  visible: false
}, action) => {
  switch (action.type) {
    case POST_TO_EDIT:
      return {
        ...action.post
      }
    default:
      return state
  }
}

const commentToEdit = (state = {
  id: "",
  author: "",
  body: "",
  visible: false
}, action) => {
  switch (action.type) {
    case COMMENT_TO_EDIT:
      return {
        ...action.comment
      }
    default:
      return state
  }
}

const postEditable = (state = false, action) => {
  switch (action.type) {
    case POST_EDITABLE:
      return action.editable
    default:
      return state
  }
}

const commentEditable = (state = false, action) => {
  switch (action.type) {
    case COMMENT_EDITABLE:
      return action.editable
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories,
  posts,
  comments,
  category,
  postToEdit,
  commentToEdit,
  postEditable,
  commentEditable
})

export default rootReducer;
