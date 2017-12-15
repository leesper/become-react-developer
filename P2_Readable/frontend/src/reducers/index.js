import { combineReducers } from "redux"
import {
  categories,
  category
} from "./categoryReducers"
import {
  comments,
  commentToEdit,
  commentEditable
} from "./commentReducers"
import {
  posts,
  postToEdit,
  postEditable
} from "./postReducers"

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
