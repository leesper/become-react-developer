import { PostDetail } from "../components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  loadPostDetail,
  loadPosts,
  changeCategory,
  loadCategories,
  loadComments,
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

const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators({
    loadPostDetail,
    loadPosts,
    loadCategories,
    loadComments,
    changeCategory,
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
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
