import { connect } from "react-redux"
import { MainList } from "../components"
import { bindActionCreators } from "redux"
import {
  changeCategory,
  loadCategories,
  loadPosts,
  addPost,
  editPost,
  loadPostDetail,
  deletePost,
  votePost,
  sortByVote,
  sortByDate,
  sortByCategory,
  postToEdit,
  postEditable
} from "../actions"

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    category: state.category,
    posts: state.posts,
    post: state.postToEdit,
    isPostEditable: state.postEditable,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators({
    loadCategories,
    loadPosts,
    changeCategory,
    addPost,
    editPost,
    loadPostDetail,
    deletePost,
    votePost,
    sortByVote,
    sortByDate,
    sortByCategory,
    postToEdit,
    postEditable
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MainList)
