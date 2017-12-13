import React from "react"
import { Card, Button, Row, Col, Divider, List, Spin } from "antd"
import IconText from "./IconText"
import Voter from "./Voter"
import { formatDate } from "../utils"
import Nav from "./Nav"
import CommentEdit from "./CommentEdit"
import PostEdit from "./PostEdit"
import { guid } from "../utils"

class PostDetail extends React.Component {
  onCommentEdit = (id, author, body) => {
    this.props.commentToEdit({
      id,
      author,
      body
    })
    this.props.commentEditable(true)
  }

  onPostEdit = (id, title, author, category, body) => {
    this.props.postToEdit({
      id,
      title,
      author,
      category,
      body,
    })
    this.props.postEditable(true)
  }

  handleEditPost = (id, title, body) => {
    this.props.editPost(id, title, body)
    this.props.postEditable(false)
  }

  handleCancelPost = () => {
    this.props.postEditable(false)
  }

  handleCancelComment = () => {
    this.props.commentEditable(false)
  }

  handleAddComment = (author, comment) => {
    this.props.addComment(guid(), Date.now(), comment, author, this.props.post.id)
    this.props.commentEditable(false)
    this.props.loadPostDetail(this.props.post.id)
  }

  handleEditComment = (id, comment) => {
    this.props.editComment(id, Date.now(), comment)
    this.props.commentEditable(false)
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
            onClick={() => this.onPostEdit(this.props.post.id, this.props.post.title, this.props.post.body)}
            >
            Edit
          </Button>,
          <Button
            icon="plus-square-o"
            type="normal"
            onClick={() => this.onCommentEdit()}
            >
            Add Comment
          </Button>,
          <Button
            icon="delete"
            type="danger"
            onClick={() => {
              this.props.deletePost(this.props.post.id)
              this.props.history.goBack()
            }}
            >
            Delete
          </Button>
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
        {
          this.props.isCommentFetching ? <Spin /> :
          <List
            itemLayout="vertical"
            dataSource={this.props.comments}
            renderItem={item => (
              <List.Item
                actions={[
                  <Voter
                    text={item.voteScore}
                    onLike={() => {this.props.voteComment(item.id, "upVote")}}
                    onDislike={() => {this.props.voteComment(item.id, "downVote")}}
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
                    onClick={() => this.onCommentEdit(item.id, item.author, item.body)}
                  />,
                  <Button
                    icon="delete"
                    type="danger"
                    onClick={() => this.props.deleteComment(item.id)}
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
        }
        <PostEdit
          visible={this.props.isPostEditable}
          post={this.props.post}
          categories={this.props.categories}
          handleEditPost={this.handleEditPost}
          handleCancel={this.handleCancelPost}
        />
        <CommentEdit
          visible={this.props.isCommentEditable}
          comment={this.props.comment}
          handleAddComment={this.handleAddComment}
          handleEditComment={this.handleEditComment}
          handleCancel={this.handleCancelComment}
        />
      </Card>
    )
  }
}

export default PostDetail
