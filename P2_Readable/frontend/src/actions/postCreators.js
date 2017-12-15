import * as ReadableAPI from '../ReadableAPI'
import {
  POSTS_SUCCESS,
  POST_DETAIL_SUCCESS,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  SORT_BY_VOTE,
  SORT_BY_DATE,
  SORT_BY_CATEGORY,
  POST_TO_EDIT,
  POST_EDITABLE
} from "./actionTypes"

export const postsSuccess = (posts) => ({type: POSTS_SUCCESS, posts})

export const loadPosts = (category) => (dispatch => {
  let promise
  if (category === "/") {
    promise = ReadableAPI.getAllPosts()
  } else {
    promise = ReadableAPI.getPostsInCategory(category)
  }

  promise
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(posts => dispatch(postsSuccess(posts)))

})

export const postDetailSuccess = (post) => ({type: POST_DETAIL_SUCCESS, post})

export const loadPostDetail = (postID) => ((dispatch, getState) => {
  const state = getState()
  const post = state.posts[postID]
  // if post already cached in state, don't request server
  if (!post) {
    ReadableAPI.getPostDetail(postID)
    .then(
      rsp => rsp.json(),
      err => console.log(err)
    )
    .then(post => dispatch(postDetailSuccess(post)))
  }
})

export const addPostSuccess = (post) => ({type: ADD_POST_SUCCESS, post})

export const addPost = (id, timestamp, title, body, author, category) => (dispatch => {
  ReadableAPI.addPost(id, timestamp, title, body, author, category)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(addPostSuccess(post)))
})

export const editPostSuccess = (post) => ({type: EDIT_POST_SUCCESS, post})

export const editPost = (id, title, body) => (dispatch => {
  ReadableAPI.editPost(id, title, body)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(editPostSuccess(post)))
})

export const deletePostSuccess = (post) => ({type: DELETE_POST_SUCCESS, post})

export const deletePost = (id) => (dispatch => {
  ReadableAPI.deletePost(id)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(deletePostSuccess(post)))
})

export const votePostSuccess = (post) => ({type: VOTE_POST_SUCCESS, post})

export const votePost = (id, option) => (dispatch => {
  ReadableAPI.votePost(id, option)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(votePostSuccess(post)))
})

export const sortByVote = () => ({type: SORT_BY_VOTE})

export const sortByDate = () => ({type: SORT_BY_DATE})

export const sortByCategory = () => ({type: SORT_BY_CATEGORY})

export const postToEdit = (post) => ({type: POST_TO_EDIT, post})

export const postEditable = (editable) => ({type: POST_EDITABLE, editable})
