const url = "localhost:3001";

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  "Authorization": token
};

const getAllCategories = () => fetch(`http://${url}/categories`, { headers });

const getPostsInCategory = (category) => fetch(`http://${url}/${category}/posts`, { headers }).then(rsp => rsp.json());

const getAllPosts = () => fetch(`http://${url}/posts`, { headers }).then(rsp => rsp.json());

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

const getPostDetail = (id) => fetch(`http://${url}/posts/${id}`, { headers }).then(rsp => rsp.json());

const votePost = (id, option) =>
  fetch(`http://${url}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({option})
  }).then(rsp => rsp.json());

const editPost = (id, title, body) =>
  fetch(`http://${url}/posts/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({title, body})
  }).then(rsp => rsp.json());

const deletePost = (id) => fetch(`http://${url}/posts/${id}`, {
  method: "DELETE",
  headers
}).then(rsp => rsp.json());

const getPostComments = (id) => fetch(`http://${url}/posts/${id}/comments`, { headers }).then(rsp => rsp.json());

const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`http://${url}/comments`, {
    method: "POST",
    headers,
  }).then(rsp => rsp.json());

const getCommentDetail = (id) => fetch(`http://${url}/comments/${id}`, { headers }).then(rsp => rsp.json());

const voteComment = (id, option) =>
  fetch(`http://${url}/comments/${id}`, {
    method: "POST",
    headers
  }).then(rsp => rsp.json());

const editComment = (id, timestamp, body) =>
  fetch(`http://${url}/comments/${id}`, {
    method: "PUT",
    headers
  }).then(rsp => rsp.json());

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
