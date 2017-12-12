import * as ReadableAPI from '../ReadableAPI'

// actions about categories
export const CATEGORIES_REQUEST = "CATEGORY_REQUEST"
export const categoriesRequest = () => ({type: CATEGORIES_REQUEST})

export const CATEGORIES_SUCCESS = "CATEGORY_SUCCESS"
export const categoriesSuccess = (json) => ({type: CATEGORIES_SUCCESS, categories: json.categories})

export const CATEGORIES_FAILURE = "CATEGORY_FAILURE"
export const categoriesFailure = (err) => ({type: CATEGORIES_FAILURE, err})

export const CATEGORY_CHANGE = "CATEGORY_CHANGE"
export const categoryChange = (category) => ({type: CATEGORY_CHANGE, category})

export const fetchCategories = () => (dispatch => {
  dispatch(categoriesRequest())
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => dispatch(categoriesFailure(err))
  )
  .then(json => dispatch(categoriesSuccess(json)))
})

// actions about posts
export const POSTS_REQUEST = "POSTS_REQUEST"
export const postsRequest = () => ({type: POSTS_REQUEST})

export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const postsSuccess = (posts) => ({type: POSTS_SUCCESS, posts})

export const POSTS_FAILURE = "POSTS_FAILURE"
export const postsFailure = (err) => ({type: POSTS_FAILURE, err})

export const fetchPosts = (category) => (dispatch => {
  dispatch(postsRequest())
  let promise
  if (category === "/") {
    promise = ReadableAPI.getAllPosts()
  } else {
    promise = ReadableAPI.getPostsInCategory(category)
  }

  promise
  .then(
    rsp => rsp.json(),
    err => dispatch(postsFailure(err))
  )
  .then(posts => dispatch(postsSuccess(posts)))

})

export const POST_DETAIL_REQUEST = "POST_DETAIL_REQUEST"
export const postDetailRequest = () => ({type: POST_DETAIL_REQUEST})

export const POST_DETAIL_SUCCESS = "POST_DETAIL_SUCCESS"
export const postDetailSuccess = (post) => ({type: POST_DETAIL_SUCCESS, post})

export const POST_DETAIL_FAILURE = "POST_DETAIL_FAILURE"
export const postDetailFailure = (err) => ({type: POST_DETAIL_FAILURE, err})

export const fetchPostDetail = (postID) => ((dispatch, getState) => {
  const state = getState()
  const post = state.posts[postID]
  // if post already cached in state, don't request server
  if (!post) {
    dispatch(postDetailRequest())
    ReadableAPI.getPostDetail(postID)
    .then(
      rsp => rsp.json(),
      err => dispatch(postDetailFailure(err))
    )
    .then(post => dispatch(postDetailSuccess(post)))
  }
})

export const ADD_POST_REQUEST = "ADD_POST_REQUEST"
export const addPostRequest = () => ({type: ADD_POST_REQUEST})

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const addPostSuccess = (post) => ({type: ADD_POST_SUCCESS, post})

export const ADD_POST_FAILURE = "ADD_POST_FAILURE"
export const addPostFailure = (err) => ({type: ADD_POST_FAILURE, err})

export const addPost = (id, timestamp, title, body, author, category) => (dispatch => {
  dispatch(addPostRequest())
  ReadableAPI.addPost(id, timestamp, title, body, author, category)
  .then(
    rsp => rsp.json(),
    err => dispatch(addPostFailure(err))
  )
  .then(post => dispatch(addPostSuccess(post)))
})

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST"
export const editPostRequest = () => ({type: EDIT_POST_REQUEST})

export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
export const editPostSuccess = (post) => ({type: EDIT_POST_SUCCESS, post})

export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE"
export const editPostFailure = (err) => ({type: EDIT_POST_FAILURE, err})

export const editPost = (id, title, body) => (dispatch => {
  dispatch(editPostRequest())
  ReadableAPI.editPost(id, title, body)
  .then(
    rsp => rsp.json(),
    err => dispatch(editPostFailure(err))
  )
  .then(post => dispatch(editPostSuccess(post)))
})

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST"
export const deletePostRequest = () => ({type: DELETE_POST_REQUEST})

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const deletePostSuccess = (post) => ({type: DELETE_POST_SUCCESS, post})

export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE"
export const deletePostFailure = (err) => ({type: DELETE_POST_FAILURE, err})

export const deletePost = (id) => (dispatch => {
  dispatch(deletePostRequest())
  ReadableAPI.deletePost(id)
  .then(
    rsp => rsp.json(),
    err => dispatch(deletePostFailure(err))
  )
  .then(post => dispatch(deletePostSuccess(post)))
})

export const VOTE_POST_REQUEST = "VOTE_POST_REQUEST"
export const votePostRequest = () => ({type: VOTE_POST_REQUEST})

export const VOTE_POST_SUCCESS = "VOTE_POST_SUCCESS"
export const votePostSuccess = (post) => ({type: VOTE_POST_SUCCESS, post})

export const VOTE_POST_FAILURE = "VOTE_POST_FAILURE"
export const votePostFailure = (err) => ({type: VOTE_POST_FAILURE, err})

export const votePost = (id, option) => (dispatch => {
  dispatch(votePostRequest())
  ReadableAPI.votePost(id, option)
  .then(
    rsp => rsp.json(),
    err => dispatch(votePostFailure(err))
  )
  .then(post => dispatch(votePostSuccess(post)))
})

// actions about comments
export const COMMENTS_REQUEST = "COMMENTS_REQUEST"
export const commentsRequest = () => ({type: COMMENTS_REQUEST})

export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS"
export const commentsSuccess = (comments) => ({type: COMMENTS_SUCCESS, comments})

export const COMMENTS_FAILURE = "COMMENTS_FAILURE"
export const commentsFailure = (err) => ({type: COMMENTS_FAILURE, err})

export const fetchComments = (postID) => ((dispatch, getState) => {
  dispatch(commentsRequest())
  ReadableAPI.getPostComments(postID)
  .then(
    rsp => rsp.json(),
    err => dispatch(commentsFailure(err))
  )
  .then(comments => dispatch(commentsSuccess(comments)))
})

export const SORT_BY_VOTE = "SORT_BY_VOTE"
export const sortByVote = () => ({type: SORT_BY_VOTE})

export const SORT_BY_DATE = "SORT_BY_DATE"
export const sortByDate = () => ({type: SORT_BY_DATE})
