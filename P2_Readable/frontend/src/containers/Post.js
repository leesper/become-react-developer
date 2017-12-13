import React from "react"
import { PostDetail } from "../components"
import { connect } from "react-redux"
import {
  fetchPostDetail,
  fetchPosts,
  categoryChange,
  fetchCategories,
  fetchComments,
  votePost,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment
} from "../actions"
import { message } from "antd"

class Poster extends React.Component {
  componentDidMount() {
    this.props.loadPostDetail(this.props.match.params.post_id)
    this.props.loadCategories()
    this.props.loadComments()
  }

  render() {
    return (
      <PostDetail
        categories={this.props.categories}
        comments={this.props.comments}
        post={this.props.post}
        onEdit={this.props.onEdit}
        onDelete={this.props.onDelete}
        changeCategory={this.props.changeCategory}
        loadPosts={this.props.loadPosts}
        votePost={this.props.votePost}
        editPost={this.props.editPost}
        deletePost={this.props.deletePost}
        history={this.props.history}
        addComment={this.props.addComment}
        editComment={this.props.editComment}
        deleteComment={this.props.deleteComment}
        isCommentFetching={this.props.isCommentFetching}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let post
  state.posts.forEach(p => {
    if (p.id === ownProps.match.params.post_id) {
      post = p
    }
  })
  return {
    categories: state.categories,
    post,
    comments: state.comments,
    isCommentFetching: state.isCommentFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPostDetail: (postID) => { dispatch(fetchPostDetail(postID)) },
  loadPosts: (category) => { dispatch(fetchPosts(category))},
  loadCategories: () => { dispatch(fetchCategories()) },
  loadComments: () => { dispatch(fetchComments(ownProps.match.params.post_id)) },
  changeCategory: (category) => { dispatch(categoryChange(category)) },
  votePost: (id, option) => {
    dispatch(votePost(id, option))
  },
  editPost: (id, title, body) => {
    dispatch(editPost(id, title, body))
  },
  deletePost: (id) => {
    dispatch(deletePost(id))
  },
  addComment: (id, timestamp, body, author, parentId) => {
    dispatch(addComment(id, timestamp, body, author, parentId))
  },
  editComment: (id, timestamp, body) => {
    dispatch(editComment(id, timestamp, body))
  },
  deleteComment: (id) => {
    dispatch(deleteComment(id))
  }
})

const Post = connect(mapStateToProps, mapDispatchToProps)(Poster)
export default Post
