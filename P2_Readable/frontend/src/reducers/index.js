import { combineReducers } from "redux"
import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORY_CHANGE,
  POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE,
  COMMENTS_SUCCESS, COMMENTS_FAILURE,
  POST_DETAIL_REQUEST, POST_DETAIL_SUCCESS, POST_DETAIL_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  VOTE_POST_REQUEST, VOTE_POST_SUCCESS, VOTE_POST_FAILURE,
  SORT_BY_VOTE, SORT_BY_DATE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE
} from "../actions"

const categoryRoot = {
  name: "全部",
  path: "/"
};

// design of state object:
// {
//   isCategoriesFetching: false,
//   categories: [],
//   category: {
//     name: "root",
//     path: "/"
//   },
//   isPostFetching: false,
//   isPostUpdating: false,
//   posts: [],
//   comments: []
// }

const isCategoriesFetching = (state = false, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return true
    case CATEGORIES_SUCCESS:
      return false
    case CATEGORIES_FAILURE:
      return false
    default:
      return state
  }
}

const categories = (state = [categoryRoot], action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return [
        categoryRoot,
        ...action.categories
      ]
    case CATEGORIES_FAILURE:
    default:
      return state;
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

const isPostFetching = (state = false, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
    case POST_DETAIL_REQUEST:
    case ADD_POST_REQUEST:
    case EDIT_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case VOTE_POST_REQUEST:
      return true
    case POSTS_SUCCESS:
    case POSTS_FAILURE:
    case POST_DETAIL_SUCCESS:
    case POST_DETAIL_FAILURE:
    case ADD_POST_SUCCESS:
    case ADD_POST_FAILURE:
    case EDIT_POST_SUCCESS:
    case EDIT_POST_FAILURE:
    case DELETE_POST_SUCCESS:
    case DELETE_POST_FAILURE:
    case VOTE_POST_SUCCESS:
    case VOTE_POST_FAILURE:
      return false
    default:
      return state
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
    case POST_DETAIL_FAILURE:
    case ADD_POST_FAILURE:
    case EDIT_POST_FAILURE:
    case VOTE_POST_FAILURE:
    case POSTS_FAILURE:
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
      return state.map(comment => {
        return comment.id === action.comment.id ? action.comment : comment
      })
    case COMMENTS_FAILURE:
    case ADD_COMMENT_FAILURE:
    case EDIT_COMMENT_FAILURE:
    default:
      return state
  }
}

const isCommentFetching = (state = false, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
    case EDIT_COMMENT_REQUEST:
      return true
    case ADD_COMMENT_SUCCESS:
    case ADD_COMMENT_FAILURE:
    case EDIT_COMMENT_SUCCESS:
    case EDIT_COMMENT_FAILURE:
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  isCategoriesFetching,
  categories,
  category,
  isPostFetching,
  posts,
  isCommentFetching,
  comments
})

export default rootReducer;
