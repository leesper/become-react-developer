import React from "react"
import { connect } from "react-redux"
import { MainList } from "../components"
import { message } from "antd"
import { fetchCategories, fetchPosts, categoryChange, addPost, editPost } from "../actions"

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
        posts={this.props.posts}
        onView={this.props.onView}
        onEdit={this.props.onEdit}
        onDelete={this.props.onDelete}
        onLike={this.props.onLike}
        onDislike={this.props.onDislike}
        onMenuItemClick={this.props.onMenuItemClick}
        loadPosts={this.props.loadPosts}
        changeCategory={this.props.changeCategory}
        addPost={this.props.addPost}
        editPost={this.props.editPost}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.category,
    categories: state.categories,
    isPostFetching: state.isPostFetching,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onView: () => { message.info("view") },
    onEdit: () => { message.info("edit") },
    onDelete: () => { message.info("delete") },
    onLike: () => { message.info("like") },
    onDislike: () => { message.info("dislike") },
    onMenuItemClick: ({ key }) => { message.info(key) },
    loadCategories: () => { dispatch(fetchCategories()) },
    loadPosts: (category) => { dispatch(fetchPosts(category))},
    changeCategory: (category) => { dispatch(categoryChange(category)) },
    addPost: (id, timestamp, title, body, author, category) => {
      dispatch(addPost(id, timestamp, title, body, author, category))
    },
    editPost: (id, title, body) => {
      dispatch(editPost(id, title, body))
    },
  }
)

const App = connect(mapStateToProps, mapDispatchToProps)(MainApp)
export default App
