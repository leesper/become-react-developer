import React from "react"
import { connect } from "react-redux"
import { MainList } from "../components"
import { message } from "antd"
import {
  fetchCategories,
  fetchPosts,
  categoryChange,
  addPost,
  editPost,
  fetchPostDetail,
  deletePost,
  votePost,
  sortByVote,
  sortByDate,
  sortByCategory,
  postToEdit,
  commentToEdit,
  postEditable,
  commentEditable
} from "../actions"

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    title: `ant design part ${i}`,
    author: 'Leesper',
    commentCount: `${i}`,
    voteScore: `${i + i}`
  });
}

class MainApp extends React.Component {
  componentDidMount() {
    this.props.loadCategories()
    this.props.loadPosts(this.props.match.params.category || this.props.category.path)
  }

  render() {
    return (
      <MainList
        categories={this.props.categories}
        category={this.props.match.params.category}
        posts={this.props.posts}
        post={this.props.post}
        isPostEditable={this.props.isPostEditable}
        isCommentEditable={this.props.isCommentEditable}
        loadPosts={this.props.loadPosts}
        changeCategory={this.props.changeCategory}
        addPost={this.props.addPost}
        editPost={this.props.editPost}
        loadPostDetail={this.props.loadPostDetail}
        deletePost={this.props.deletePost}
        votePost={this.props.votePost}
        sortByVote={this.props.sortByVote}
        sortByDate={this.props.sortByDate}
        sortByCategory={this.props.sortByCategory}
        postToEdit={this.props.postToEdit}
        commentToEdit={this.props.commentToEdit}
        postEditable={this.props.postEditable}
        commentEditable={this.props.commentEditable}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    category: state.category,
    posts: state.posts,
    post: state.postToEdit,
    isPostEditable: state.postEditable,
    isCommentEditable: state.commentEditable
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    loadCategories: () => {
      dispatch(fetchCategories())
    },
    loadPosts: (category) => {
      dispatch(fetchPosts(category))
    },
    changeCategory: (category) => {
      dispatch(categoryChange(category))
    },
    addPost: (id, timestamp, title, body, author, category) => {
      dispatch(addPost(id, timestamp, title, body, author, category))
    },
    editPost: (id, title, body) => {
      dispatch(editPost(id, title, body))
    },
    loadPostDetail: (postID) => {
      dispatch(fetchPostDetail(postID))
    },
    deletePost: (id) => {
      dispatch(deletePost(id))
    },
    votePost: (id, option) => {
      dispatch(votePost(id, option))
    },
    sortByVote: () => {
      dispatch(sortByVote())
    },
    sortByDate: () => {
      dispatch(sortByDate())
    },
    sortByCategory: () => {
      dispatch(sortByCategory())
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
  }
)

const App = connect(mapStateToProps, mapDispatchToProps)(MainApp)
export default App
