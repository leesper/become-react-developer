import { combineReducers } from "redux"
import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORY_CHANGE
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
  name: "root",
  path: "/"
};

const category = (state = categoryRoot, action) => {
  switch (action.type) {
    case CATEGORY_CHANGE:
      return action.category
    default:
      return state
  }
};

const categories = (state = [categoryRoot], action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return [
        ...state,
        action.categories
      ];
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
};

const isPostFetching = (state = false, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return true;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isPostFetching,
  category,
  categories
});

export default rootReducer;
