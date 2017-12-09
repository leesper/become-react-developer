import React from "react"
import { PostDetail } from "../components"
import { connect } from "react-redux"
import { fetchPostDetail } from "../actions"
import { message } from "antd"

class Poster extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadPostDetail()
  }

  render() {
    return (
      <PostDetail
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
    post
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPostDetail: () => { dispatch(fetchPostDetail(ownProps.match.params.post_id)) },
  onLike: () => { message.info("like") },
  onDislike: () => { message.info("dislike") }
})

const Post = connect(mapStateToProps, mapDispatchToProps)(Poster)
export default Post
