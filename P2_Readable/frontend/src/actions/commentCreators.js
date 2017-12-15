import * as ReadableAPI from '../ReadableAPI'
import {
  COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  COMMENT_TO_EDIT,
  COMMENT_EDITABLE
} from "./actionTypes"

export const commentsSuccess = (comments) => ({type: COMMENTS_SUCCESS, comments})

export const fetchComments = (postID) => ((dispatch, getState) => {
  ReadableAPI.getPostComments(postID)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comments => dispatch(commentsSuccess(comments)))
})

export const addCommentSuccess = (comment) => ({type: ADD_COMMENT_SUCCESS, comment})

export const addComment = (id, timestamp, body, author, parentId) => (dispatch => {
  ReadableAPI.addComment(id, timestamp, body, author, parentId)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(addCommentSuccess(comment)))
})

export const editCommentSuccess = (comment) => ({type: EDIT_COMMENT_SUCCESS, comment})

export const editComment = (id, timestamp, body) => (dispatch => {
  ReadableAPI.editComment(id, timestamp, body)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(editCommentSuccess(comment)))
})

export const voteCommentSuccess = (comment) => ({type: VOTE_COMMENT_SUCCESS, comment})

export const voteComment = (id, option) => (dispatch => {
  ReadableAPI.voteComment(id, option)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(voteCommentSuccess(comment)))
})

export const deleteCommentSuccess = (comment) => ({type: DELETE_COMMENT_SUCCESS, comment})

export const deleteComment = (id) => (dispatch => {
  ReadableAPI.deleteComment(id)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(deleteCommentSuccess(comment)))
})

export const commentToEdit = (comment) => ({type: COMMENT_TO_EDIT, comment})

export const commentEditable = (editable) => ({type: COMMENT_EDITABLE, editable})
