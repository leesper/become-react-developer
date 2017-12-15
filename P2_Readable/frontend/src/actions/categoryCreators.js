import * as ReadableAPI from '../ReadableAPI'
import {
  CATEGORIES_SUCCESS,
  CATEGORY_CHANGE
} from "./actionTypes"

export const categoriesSuccess = (json) => ({type: CATEGORIES_SUCCESS, categories: json.categories})

export const changeCategory = (category) => ({type: CATEGORY_CHANGE, category})

export const loadCategories = () => (dispatch => {
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(json => dispatch(categoriesSuccess(json)))
})
