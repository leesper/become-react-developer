import React from "react"
import { connect } from "react-redux"
import { MainList } from "../components"
import { message } from "antd"
import { fetchCategories, fetchPosts } from "../actions"

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    title: `ant design part ${i}`,
    author: 'Leesper',
    commentCount: `${i}`,
    voteScore: `${i + i}`
  });
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadCategories()
    this.props.loadPosts(this.props.category.path)
  }

  render() {
    return (
      <MainList
        categories={this.props.categories}
        posts={this.props.posts}
        onEdit={this.props.onEdit}
        onDelete={this.props.onDelete}
        onLike={this.props.onLike}
        onDislike={this.props.onDislike}
        onMenuItemClick={this.props.onMenuItemClick}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    category: state.category,
    categories: state.categories,
    isPostFetching: state.isPostFetching,
    posts: state.posts
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onEdit: () => { message.info("edit") },
    onDelete: () => { message.info("delete") },
    onLike: () => { message.info("like") },
    onDislike: () => { message.info("dislike") },
    onMenuItemClick: ({ key }) => { message.info("menu item" + key) },
    loadCategories: () => { dispatch(fetchCategories()) },
    loadPosts: (category) => { dispatch(fetchPosts(category))}
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
