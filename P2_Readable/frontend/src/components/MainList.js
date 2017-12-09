import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col, Menu, List, Avatar, Icon, Button } from "antd"
import IconText from "./IconText"
import Voter from "./Voter"

const SubMenu = Menu.SubMenu

const formatDate = (timestamp) => {
  const dt = new Date(timestamp)
  const year = dt.getFullYear()
  const month = "0" + dt.getMonth()
  const day = "0" + dt.getDay()
  const hour = "0" + dt.getHours()
  const min = "0" + dt.getMinutes()
  const sec = "0" + dt.getSeconds()
  return `${year}-${month.substr(-2)}-${day.substr(-2)} ${hour.substr(-2)}:${min.substr(-2)}:${sec.substr(-2)}`
}

const MainList = (props) => (
  <div style={{ margin: "30px"}}>
    <Row>
      <Col span={4}>
        <header>Readable</header>
      </Col>
      <Col span={10}>
        <Menu
          mode="horizontal"
          onClick={props.onMenuItemClick}
        >
          <Menu.Item key="new">写新帖子</Menu.Item>
          <SubMenu key="sort" title={<span>排序</span>}>
            <Menu.Item key="byVote">按投票分数</Menu.Item>
            <Menu.Item key="byTTS">按创建时间</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={10}>
        {
          props.categories.map((category) => (
            <Link
              key={category.path}
              style={{ marginLeft: 60 }}
              to={category.path}
              onClick={
                () => {
                  props.changeCategory(category)
                  props.loadPosts(category.path)
                }
              }
              >{category.name}</Link>
          ))
        }
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={props.posts}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <Voter text={item.voteScore} onLike={props.onLike} onDislike={props.onDislike} />,
                <IconText type="message" text={item.commentCount} />,
                <IconText type="folder" text={item.category} />,
                <IconText type="calendar" text={formatDate(item.timestamp)} />,
                <Button icon="edit" type="primary" onClick={props.onEdit}>Edit</Button>,
                <Button icon="delete" type="danger" onClick={props.onDelete}>Delete</Button>]}
              >
                <List.Item.Meta
                  title={<Link to={`${item.category}/${item.id}`} exact>{item.title}</Link>}
                  description={item.author}
                />
            </List.Item>
          )}
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

export default MainList
