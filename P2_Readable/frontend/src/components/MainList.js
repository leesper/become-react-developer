import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col, Menu, List, Button, message } from "antd"
import IconText from "./IconText"
import Voter from "./Voter"
import { formatDate } from "../utils"
import Nav from "./Nav"
import PostEdit from "./PostEdit"

const SubMenu = Menu.SubMenu

class MainList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postID: "",
      title: "",
      author: "",
      content: "",
      category: "",
      loading: false,
      visible: false
    }
  }

  onEdit = (id, title, author, content, category) => {
    this.setState({
      postID: id,
      title: title,
      author: author,
      content: content,
      category: category,
      visible: true
    })
  }

  onMenuItemClick = ({ key }) => {
    message.info(key)
    if (key === "new") {
      this.onEdit()
    }
  }

  handleOK = () => {
    console.log("handle ok", this.state)
    this.setState({
      loading: true,
    })
    const self = this
    setTimeout(() => {
      self.setState({
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
      <div style={{ margin: "30px" }}>
        <Row>
          <Col span={4}>
            <header>Readable</header>
          </Col>
          <Col span={10}>
            <Menu
              mode="horizontal"
              onClick={this.onMenuItemClick}
            >
              <Menu.Item key="new">写新帖子</Menu.Item>
              <SubMenu key="sort" title={<span>排序</span>}>
                <Menu.Item key="byVote">按投票分数</Menu.Item>
                <Menu.Item key="byTTS">按创建时间</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={10}>
            <Nav
              categories={this.props.categories}
              changeCategory={this.props.changeCategory}
              loadPosts={this.props.loadPosts}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={this.props.posts}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <Voter text={item.voteScore} onLike={this.props.onLike} onDislike={this.props.onDislike} />,
                    <IconText type="user" text={item.author} />,
                    <IconText type="message" text={item.commentCount} />,
                    <IconText type="folder" text={item.category} />,
                    <IconText type="calendar" text={formatDate(item.timestamp)} />,
                    <Button
                      icon="edit"
                      type="primary"
                      onClick={() => this.onEdit(item.id, item.title, item.author, item.body, item.category)}
                      >
                        Edit
                    </Button>,
                    <Button icon="delete" type="danger" onClick={this.props.onDelete}>Delete</Button>]}
                  >
                    <List.Item.Meta
                      title={<Link to={`${item.category}/${item.id}`}>{item.title}</Link>}
                    />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <PostEdit
              visible={this.state.visible}
              loading={this.state.loading}
              postID={this.state.postID}
              title={this.state.title}
              author={this.state.author}
              content={this.state.content}
              categories={this.props.categories}
              handleOK={this.handleOK}
              handleCancel={this.handleCancel}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <footer style={{textAlign: "center"}}>Readable Created By Leesper</footer>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainList
