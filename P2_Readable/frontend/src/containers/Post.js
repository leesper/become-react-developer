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
  deleteComment,
  voteComment,
  postToEdit,
  commentToEdit,
  postEditable,
  commentEditable
} from "../actions"

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
        post={this.props.post}
        comments={this.props.comments}
        comment={this.props.comment}
        isPostEditable={this.props.isPostEditable}
        isCommentEditable={this.props.isCommentEditable}
        loadPostDetail={this.props.loadPostDetail}
        loadPosts={this.props.loadPosts}
        changeCategory={this.props.changeCategory}
        votePost={this.props.votePost}
        editPost={this.props.editPost}
        deletePost={this.props.deletePost}
        addComment={this.props.addComment}
        editComment={this.props.editComment}
        deleteComment={this.props.deleteComment}
        voteComment={this.props.voteComment}
        history={this.props.history}
        postToEdit={this.props.postToEdit}
        commentToEdit={this.props.commentToEdit}
        postEditable={this.props.postEditable}
        commentEditable={this.props.commentEditable}
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
    isPostEditable: state.postEditable,
    isCommentEditable: state.commentEditable,
    comment: state.commentToEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPostDetail: (postID) => {
    dispatch(fetchPostDetail(postID))
  },
  loadPosts: (category) => {
    dispatch(fetchPosts(category))
  },
  loadCategories: () => {
    dispatch(fetchCategories())
  },
  loadComments: () => {
    dispatch(fetchComments(ownProps.match.params.post_id))
  },
  changeCategory: (category) => {
    dispatch(categoryChange(category))
  },
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
  },
  voteComment: (id, option) => {
    dispatch(voteComment(id, option))
  },
  postToEdit: (post) => {
    dispatch(postToEdit(post))
  },
  commentToEdit: (comment) => {
    dispatch(commentToEdit(comment))
  },
  postEditable: (editable) => {
    dispatch(postEditable(editable))
  },
  commentEditable: (editable) => {
    dispatch(commentEditable(editable))
  }
})

const Post = connect(mapStateToProps, mapDispatchToProps)(Poster)
export default Post
