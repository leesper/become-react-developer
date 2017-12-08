import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Menu, List, Avatar, Icon, Button } from "antd"

const SubMenu = Menu.SubMenu


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Voter = ({ text, onLike, onDislike }) => (
  <span>
    <Button icon="like" style={{ marginRight: 8 }} onClick={onLike} />
    <span style={{ marginRight: 8}}>{text}</span>
    <Button icon="dislike" onClick={onDislike} />
  </span>
);

const MainList = (props) => (
  <div style={{ margin: "30px"}}>
    <Row>
      <Col span={2}>
        <header>Readable</header>
      </Col>
      <Col span={22}>
        <Menu
          mode="horizontal"
          onClick={props.onMenuItemClick}
        >
          <Menu.Item key="new">写新帖子</Menu.Item>
          <SubMenu key="sort" title={<span>排序</span>}>
            <Menu.Item key="byVote">按投票分数</Menu.Item>
            <Menu.Item key="byTTS">按创建时间</Menu.Item>
          </SubMenu>
          {
            props.categories.map(category => (
              <Menu.Item key={category.path}>{category.name}</Menu.Item>
            ))
          }
        </Menu>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={props.listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <Voter text={item.voteScore} onLike={props.onLike} onDislike={props.onDislike} />,
                <IconText type="message" text="2" />,
                <Button icon="edit" type="primary" onClick={props.onEdit}>Edit</Button>,
                <Button icon="delete" type="danger" onClick={props.onDelete}>Delete</Button>]}
              >
                <List.Item.Meta
                  title={item.title}
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
