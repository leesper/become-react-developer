import { combineReducers } from "redux"
import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORY_CHANGE
} from "../actions"

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
    case CATEGORY_SUCCESS:
      return [
        ...state,
        action.categories
      ];
    case CATEGORY_FAILURE:
      return [
        ...state,
        {
          name: "error",
          path: action.err
        }
      ];
    default:
      return state;
  }
};

const isCategoriesFetching = (state = false, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return true;
    default:
      return state;
  }
};
