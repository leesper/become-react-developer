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
  sortByCategory
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
        isCategoriesFetching={this.props.isCategoriesFetching}
        categories={this.props.categories}
        category={this.props.match.params.category}
        isPostFetching={this.props.isPostFetching}
        isPostUpdating={this.props.isPostUpdating}
        updatedPost={this.props.updatedPost}
        posts={this.props.posts}
        onView={this.props.onView}
        onEdit={this.props.onEdit}
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
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isCategoriesFetching: state.isCategoriesFetching,
    categories: state.categories,
    category: state.category,
    isPostFetching: state.isPostFetching,
    isPostUpdating: state.isPostUpdating,
    updatedPost: state.updatedPost,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onView: () => { message.info("view") },
    onEdit: () => { message.info("edit") },
    loadCategories: () => { dispatch(fetchCategories()) },
    loadPosts: (category) => { dispatch(fetchPosts(category))},
    changeCategory: (category) => { dispatch(categoryChange(category)) },
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
    }
  }
)

const App = connect(mapStateToProps, mapDispatchToProps)(MainApp)
export default App
