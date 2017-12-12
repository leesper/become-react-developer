import { combineReducers } from "redux"
import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORY_CHANGE,
  POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE,
  COMMENTS_SUCCESS, COMMENTS_FAILURE,
  POST_DETAIL_REQUEST, POST_DETAIL_SUCCESS, POST_DETAIL_FAILURE
} from "../actions"

// design of state object:
// {
//   isPostFetching: false,
//   category: {
//     name: "root",
//     path: "/"
//   }
//   posts: {},
//   comments: {},
//   categories: []
// }

const categoryRoot = {
  name: "全部",
  path: "/"
};

const category = (state = categoryRoot, action) => {
  switch (action.type) {
    case CATEGORY_CHANGE:
      return action.category;
    default:
      return state;
  }
};

const categories = (state = [categoryRoot], action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return [
        categoryRoot,
        ...action.categories
      ]
    case CATEGORIES_FAILURE:
      return [
        {
          name: "error",
          path: action.err
        }
      ];
    default:
      return state;
  }
}

const isPostFetching = (state = false, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
    case POST_DETAIL_REQUEST:
      return true
    case POSTS_SUCCESS:
    case POSTS_FAILURE:
    case POST_DETAIL_SUCCESS:
    case POST_DETAIL_FAILURE:
      return false
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return action.posts
    case POSTS_FAILURE:
    case POST_DETAIL_FAILURE:
      return { err: action.err }
    case POST_DETAIL_SUCCESS:
      return [
        ...state.filter(p => p.id !== action.post.id),
        action.post
      ]
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
  isPostFetching,
  category,
  posts,
  categories,
  comments
})

export default rootReducer;
