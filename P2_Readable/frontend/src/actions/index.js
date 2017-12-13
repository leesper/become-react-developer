import * as ReadableAPI from '../ReadableAPI'

// actions about categories
export const CATEGORIES_SUCCESS = "CATEGORY_SUCCESS"
export const categoriesSuccess = (json) => ({type: CATEGORIES_SUCCESS, categories: json.categories})

export const CATEGORY_CHANGE = "CATEGORY_CHANGE"
export const categoryChange = (category) => ({type: CATEGORY_CHANGE, category})

export const fetchCategories = () => (dispatch => {
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(json => dispatch(categoriesSuccess(json)))
})

// actions about posts
export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const postsSuccess = (posts) => ({type: POSTS_SUCCESS, posts})

export const fetchPosts = (category) => (dispatch => {
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

export const POST_DETAIL_SUCCESS = "POST_DETAIL_SUCCESS"
export const postDetailSuccess = (post) => ({type: POST_DETAIL_SUCCESS, post})

export const fetchPostDetail = (postID) => ((dispatch, getState) => {
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

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const addPostSuccess = (post) => ({type: ADD_POST_SUCCESS, post})

export const addPost = (id, timestamp, title, body, author, category) => (dispatch => {
  ReadableAPI.addPost(id, timestamp, title, body, author, category)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(addPostSuccess(post)))
})

export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
export const editPostSuccess = (post) => ({type: EDIT_POST_SUCCESS, post})

export const editPost = (id, title, body) => (dispatch => {
  ReadableAPI.editPost(id, title, body)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(editPostSuccess(post)))
})

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const deletePostSuccess = (post) => ({type: DELETE_POST_SUCCESS, post})

export const deletePost = (id) => (dispatch => {
  ReadableAPI.deletePost(id)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(deletePostSuccess(post)))
})

export const VOTE_POST_SUCCESS = "VOTE_POST_SUCCESS"
export const votePostSuccess = (post) => ({type: VOTE_POST_SUCCESS, post})

export const votePost = (id, option) => (dispatch => {
  ReadableAPI.votePost(id, option)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(post => dispatch(votePostSuccess(post)))
})

// actions about comments
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS"
export const commentsSuccess = (comments) => ({type: COMMENTS_SUCCESS, comments})

export const fetchComments = (postID) => ((dispatch, getState) => {
  ReadableAPI.getPostComments(postID)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comments => dispatch(commentsSuccess(comments)))
})

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const addCommentSuccess = (comment) => ({type: ADD_COMMENT_SUCCESS, comment})

export const addComment = (id, timestamp, body, author, parentId) => (dispatch => {
  ReadableAPI.addComment(id, timestamp, body, author, parentId)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(addCommentSuccess(comment)))
})

export const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS"
export const editCommentSuccess = (comment) => ({type: EDIT_COMMENT_SUCCESS, comment})

export const editComment = (id, timestamp, body) => (dispatch => {
  ReadableAPI.editComment(id, timestamp, body)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(editCommentSuccess(comment)))
})

export const VOTE_COMMENT_SUCCESS = "VOTE_COMMENT_SUCCESS"
export const voteCommentSuccess = (comment) => ({type: VOTE_COMMENT_SUCCESS, comment})

export const voteComment = (id, option) => (dispatch => {
  ReadableAPI.voteComment(id, option)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(voteCommentSuccess(comment)))
})

export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS"
export const deleteCommentSuccess = (comment) => ({type: DELETE_COMMENT_SUCCESS, comment})

export const deleteComment = (id) => (dispatch => {
  ReadableAPI.deleteComment(id)
  .then(
    rsp => rsp.json(),
    err => console.log(err)
  )
  .then(comment => dispatch(deleteCommentSuccess(comment)))
})

// actions for sorting
export const SORT_BY_VOTE = "SORT_BY_VOTE"
export const sortByVote = () => ({type: SORT_BY_VOTE})

export const SORT_BY_DATE = "SORT_BY_DATE"
export const sortByDate = () => ({type: SORT_BY_DATE})

export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY"
export const sortByCategory = () => ({type: SORT_BY_CATEGORY})

export const POST_TO_EDIT = "POST_TO_EDIT"
export const postToEdit = (post) => ({type: POST_TO_EDIT, post})

export const COMMENT_TO_EDIT = "COMMENT_TO_EDIT"
export const commentToEdit = (comment) => ({type: COMMENT_TO_EDIT, comment})
