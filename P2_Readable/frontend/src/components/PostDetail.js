import React from "react"
import { Card, Button, Row, Col, Divider, List, Avatar } from "antd"
import { Link } from "react-router-dom"
import IconText from "./IconText"
import Voter from "./Voter"
import { formatDate } from "../utils"
import Nav from "./Nav"
import CommentEdit from "./CommentEdit"

const { Meta } = Card;
class PostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "Author",
      comment: "comment",
      loading: false,
      visible: false
    }
  }

  onEdit = (author, comment) => {
    this.setState({
      author: author,
      comment: comment,
      visible: true
    })
  }

  handleOK = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        visible: false,
        loading: false
      })
    }, 2000)
  }

  handleCancel = () => {
    this.setState({
      visible: false
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
          <Button icon="edit" type="primary">Edit</Button>,
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
                onLike={this.props.onLike}
                onDislike={this.props.onDislike}
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
        <CommentEdit
          visible={this.state.visible}
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
