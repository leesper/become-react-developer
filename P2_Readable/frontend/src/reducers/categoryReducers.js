import {
  CATEGORIES_SUCCESS,
  CATEGORY_CHANGE
} from "../actions/actionTypes"

const INITIAL_CATEGORY_STATE = {
  name: "全部",
  path: "/"
}

const INITIAL_CATEGORIES_STATE = [
  INITIAL_CATEGORY_STATE
]

export const categories = (state = INITIAL_CATEGORIES_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return [
        INITIAL_CATEGORY_STATE,
        ...action.categories
      ]
    default:
      return state;
  }
}

export const category = (state = INITIAL_CATEGORY_STATE, action) => {
  switch (action.type) {
    case CATEGORY_CHANGE:
      return action.category;
    default:
      return state;
  }
}
