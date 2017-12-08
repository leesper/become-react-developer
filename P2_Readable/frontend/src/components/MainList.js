import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Menu, List, Avatar, Icon, Button } from "antd"

const SubMenu = Menu.SubMenu
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    title: `ant design part ${i}`,
    author: 'Leesper',
    commentCount: `${i}`,
    voteScore: `${i + i}`
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Voter = ({ text }) => (
  <span>
    <Button icon="like" style={{ marginRight: 8 }} />
    <span style={{ marginRight: 8}}>{text}</span>
    <Button icon="dislike" />
  </span>
);

const MainList = () => (
  <div style={{ margin: "30px"}}>
    <Row>
      <Col span={2}>
        <header>Readable</header>
      </Col>
      <Col span={22}>
        <Menu
          mode="horizontal"
        >
          <Menu.Item key="new">写新帖子</Menu.Item>
          <SubMenu key="sort" title={<span>排序</span>}>
            <Menu.Item key="byVote">按投票分数</Menu.Item>
            <Menu.Item key="byTTS">按创建时间</Menu.Item>
          </SubMenu>
          <Menu.Item key="all">all</Menu.Item>
          <Menu.Item key="react">react</Menu.Item>
          <Menu.Item key="redux">redux</Menu.Item>
          <Menu.Item key="udacity">udacity</Menu.Item>
        </Menu>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <Voter text={item.voteScore}/>,
                <IconText type="message" text="2" />,
                <Button icon="edit" type="primary">Edit</Button>,
                <Button icon="delete" type="danger">Delete</Button>]}
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
