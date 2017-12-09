import * as ReadableAPI from '../ReadableAPI'

// actions about categories
export const CATEGORIES_REQUEST = "CATEGORY_REQUEST"
export const categoriesRequest = () => ({type: CATEGORIES_REQUEST})

export const CATEGORIES_SUCCESS = "CATEGORY_SUCCESS"
export const categoriesSuccess = (json) => ({type: CATEGORIES_SUCCESS, categories: json.categories})

export const CATEGORIES_FAILURE = "CATEGORY_FAILURE"
export const categoriesFailure = (err) => ({type: CATEGORIES_FAILURE, err})

export const fetchCategories = () => (dispatch => {
  dispatch(categoriesRequest())
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => dispatch(categoriesFailure(err))
  )
  .then(json => dispatch(categoriesSuccess(json)))
})

export const CATEGORY_CHANGE = "CATEGORY_CHANGE"
export const categoryChange = (category) => ({type: CATEGORY_CHANGE, category})

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

// actions about comments
export const COMMENTS_REQUEST = "COMMENTS_REQUEST"
export const commentsRequest = () => ({type: COMMENTS_REQUEST})

export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS"
export const commentsSuccess = (comments) => ({type: COMMENTS_SUCCESS, comments})

export const COMMENTS_FAILURE = "COMMENTS_FAILURE"
export const commentsFailure = (err) => ({type: COMMENTS_FAILURE, err})

export const fetchComments = (postID) => ((dispatch, getState) => {
  const state = getState()
  const post = state.posts[postID]
  if (!post) {
    dispatch(commentsRequest())
    ReadableAPI.getPostComments(postID)
    .then(
      rsp => rsp.json(),
      err => dispatch(commentsFailure(err))
    )
    .then(comments => dispatch(commentsSuccess(comments)))
  }
})

export const POST_DETAIL_REQUEST = "POST_DETAIL_REQUEST"
export const postDetailRequest = () => ({type: POST_DETAIL_REQUEST})

export const POST_DETAIL_SUCCESS = "POST_DETAIL_SUCCESS"
export const postDetailSuccess = (post) => ({type: POST_DETAIL_SUCCESS, post})

export const POST_DETAIL_FAILURE = "POST_DETAIL_FAILURE"
export const postDetailFailure = (err) => {{type: POST_DETAIL_FAILURE, err}}

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
