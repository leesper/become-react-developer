const url = "localhost:3001";

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  "Authorization": token
};

// get all of the categories available for the app
const getAllCategories = () => fetch(`http://${url}/categories`, { headers })

// get all the posts for a particular category
const getPostsInCategory = (category) => fetch(`http://${url}/${category}/posts`, { headers })

// get all of the posts
const getAllPosts = () => fetch(`http://${url}/posts`, { headers })

// add a new post
const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`http://${url}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      id,
      timestamp,
      title,
      body,
      author,
      category
    })
  }).then(rsp => rsp.json());

// get the details of a single post
const getPostDetail = (id) => fetch(`http://${url}/posts/${id}`, { headers })

// voting on a post
const votePost = (id, option) =>
  fetch(`http://${url}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({option})
  }).then(rsp => rsp.json());

// edit the details of an existing post
const editPost = (id, title, body) =>
  fetch(`http://${url}/posts/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({title, body})
  }).then(rsp => rsp.json());

// sets the deleted flag for a post to true
const deletePost = (id) => fetch(`http://${url}/posts/${id}`, {
  method: "DELETE",
  headers
}).then(rsp => rsp.json());

// get all the comments for a single post
const getPostComments = (id) => fetch(`http://${url}/posts/${id}/comments`, { headers }).then(rsp => rsp.json());

// add a comment to a post
const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`http://${url}/comments`, {
    method: "POST",
    headers,
  }).then(rsp => rsp.json());

// get the details for a single comment
const getCommentDetail = (id) => fetch(`http://${url}/comments/${id}`, { headers }).then(rsp => rsp.json());

// voting on a comment
const voteComment = (id, option) =>
  fetch(`http://${url}/comments/${id}`, {
    method: "POST",
    headers
  }).then(rsp => rsp.json());

// edit the details of an existing comment
const editComment = (id, timestamp, body) =>
  fetch(`http://${url}/comments/${id}`, {
    method: "PUT",
    headers
  }).then(rsp => rsp.json());

// sets a comment's deleted flag to true
const deleteComment = (id) =>
  fetch(`http://${url}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(rsp => rsp.json());

export {
  getAllCategories,
  getPostsInCategory,
  getAllPosts,
  addPost,
  getPostDetail,
  votePost,
  editPost,
  deletePost,
  getPostComments,
  addComment,
  getCommentDetail,
  voteComment,
  editComment,
  deleteComment
};
