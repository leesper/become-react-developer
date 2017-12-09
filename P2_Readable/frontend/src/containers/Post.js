import React from "react"
import { PostDetail } from "../components"
import { connect } from "react-redux"
import { fetchPostDetail, fetchPosts, categoryChange, fetchCategories } from "../actions"
import { message } from "antd"

class Poster extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadPostDetail()
    this.props.loadCategories()
  }

  render() {
    return (
      <PostDetail
        categories={this.props.categories}
        post={this.props.post}
        onLike={this.props.onLike}
        onDislike={this.props.onDislike}
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
    post
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPostDetail: () => { dispatch(fetchPostDetail(ownProps.match.params.post_id)) },
  onLike: () => { message.info("like") },
  onDislike: () => { message.info("dislike") },
  loadPosts: (category) => { dispatch(fetchPosts(category))},
  loadCategories: () => { dispatch(fetchCategories()) },
  changeCategory: (category) => { dispatch(categoryChange(category)) }
})

const Post = connect(mapStateToProps, mapDispatchToProps)(Poster)
export default Post
