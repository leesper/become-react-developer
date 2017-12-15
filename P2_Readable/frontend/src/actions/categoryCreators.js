import * as ReadableAPI from '../ReadableAPI'
import {
  CATEGORIES_SUCCESS,
  CATEGORY_CHANGE
} from "./actionTypes"

export const categoriesSuccess = (json) => ({type: CATEGORIES_SUCCESS, categories: json.categories})

export const categoryChange = (category) => ({type: CATEGORY_CHANGE, category})

export const fetchCategories = () => (dispatch => {
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(json => dispatch(categoriesSuccess(json)))
})
