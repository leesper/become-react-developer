import { combineReducers } from "redux"
import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORY_CHANGE,
  POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE,
  COMMENTS_SUCCESS, COMMENTS_FAILURE,
  POST_DETAIL_REQUEST, POST_DETAIL_SUCCESS, POST_DETAIL_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE
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
    case POST_DETAIL_FAILURE:
    case ADD_POST_FAILURE:
    case EDIT_POST_FAILURE:
    case POSTS_FAILURE:
    default:
      return state
  }
}








const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_SUCCESS:
      return action.comments
    case COMMENTS_FAILURE:
      return { err: action.err }
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
  comments
})

export default rootReducer;
