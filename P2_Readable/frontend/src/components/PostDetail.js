import React from "react"
import { Card, Button, Row, Col, Divider, List } from "antd"
import IconText from "./IconText"
import Voter from "./Voter"
import { formatDate } from "../utils"
import Nav from "./Nav"
import CommentEdit from "./CommentEdit"
import PostEdit from "./PostEdit"

class PostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentAuthor: "Author",
      comment: "comment",
      commentVisible: false,
      postID: "",
      postTitle: "",
      postContent: "",
      postVisible: false
    }
  }

  onEdit = (author, comment) => {
    this.setState({
      author: author,
      comment: comment,
      visible: true
    })
  }

  onPostEdit = (id, title, body) => {
    this.setState({
      postID: id,
      postTitle: title,
      postContent: body,
      postVisible: true
    })
  }

  handleEditPost = (id, title, body) => {
    this.props.editPost(id, title, body)
    this.setState({
      postVisible: false
    })
  }

  handlePostCancel = () => {
    this.setState({
      postVisible: false
    })
  }

  render() {
    return (
      <Card
        style={{ width: 900, margin: "0 auto" }}
        extra={
          this.props.categories &&
          <Nav
            categories={this.props.categories}
            changeCategory={this.props.changeCategory}
            loadPosts={this.props.loadPosts}
          />
        }
        actions={[
          <Button
            icon="edit"
            type="primary"
            onClick={() => this.onPostEdit(this.props.post.id, this.props.post.title, this.props.post.body)}>
            Edit
          </Button>,
          <Button icon="plus-square-o" type="normal">Add Comment</Button>,
          <Button icon="delete" type="danger">Delete</Button>
        ]}
        >
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <h1>{this.props.post ? this.props.post.title : ""}</h1>
            </Col>
          </Row>
          <Divider dashed />
          <Row>
            <Col span={6}>
              <Voter
                text={this.props.post ? this.props.post.voteScore : ""}
                onLike={() => this.props.post && this.props.votePost(this.props.post.id, "upVote")}
                onDislike={() => this.props.post && this.props.votePost(this.props.post.id, "downVote")}
              />,
            </Col>
            <Col span={6}>
              <IconText
                type="user"
                text={this.props.post ? this.props.post.author : ""}
              />
            </Col>
            <Col span={6}>
              <IconText
                type="message"
                text={this.props.post ? this.props.post.commentCount : ""}
              />
            </Col>
            <Col span={6}>
              <IconText
                type="calendar"
                text={this.props.post ? formatDate(this.props.post.timestamp) : ""}
              />
            </Col>
          </Row>
          <Divider dashed />
          <p>{this.props.post ? this.props.post.body : ""}</p>
          <Divider dashed />
        <List
          itemLayout="vertical"
          dataSource={this.props.comments}
          renderItem={item => (
            <List.Item
              actions={[
                <Voter
                  text={item.voteScore}
                  onLike={this.props.onLike}
                  onDislike={this.props.onDislike}
                />,
                <IconText
                  type="user"
                  text={item.author}
                />,
                <IconText
                  type="calendar"
                  text={formatDate(item.timestamp)}
                />,
                <Button
                  icon="edit"
                  type="primary"
                  onClick={() => this.onEdit(item.author, item.body)}
                />,
                <Button
                  icon="delete"
                  type="danger"
                  onClick={this.props.onDelete}
                />
              ]}
              >
              <List.Item.Meta
                key={item.id}
                description={item.body}
              />
            </List.Item>
          )}
        />
        <PostEdit
          visible={this.state.postVisible}
          postID={this.props.post && this.props.post.id}
          title={this.props.post && this.props.post.title}
          author={this.props.post && this.props.post.author}
          content={this.props.post && this.props.post.body}
          categories={this.props.categories}
          handleEditPost={this.handleEditPost}
          handleCancel={this.handlePostCancel}
        />
        <CommentEdit
          visible={this.state.commentVisible}
          loading={this.state.loading}
          author={this.state.author}
          comment={this.state.comment}
          handleOK={this.handleOK}
          handleCancel={this.handleCancel}
        />
      </Card>
    )
  }
}

export default PostDetail
