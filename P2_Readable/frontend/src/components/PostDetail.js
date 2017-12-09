import React from "react"
import { Card, Button, Row, Col, Divider, List, Avatar } from "antd"
import { Link } from "react-router-dom"
import IconText from "./IconText"
import Voter from "./Voter"
import { formatDate } from "../utils"
import Nav from "./Nav"

const { Meta } = Card;
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const PostDetail = (props) => (
  <Card
    style={{ width: 900, margin: "0 auto" }}
    extra={
      props.categories && <Nav
        categories={props.categories}
        changeCategory={props.changeCategory}
        loadPosts={props.loadPosts}
      />
    }
    actions={[
      <Button icon="edit" type="primary">Edit</Button>,
      <Button icon="delete" type="danger">Delete</Button>
    ]}
    >
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1>{props.post ? props.post.title : ""}</h1>
        </Col>
      </Row>
      <Divider dashed />
      <Row>
        <Col span={6}>
          <Voter
            text={props.post ? props.post.voteScore : ""}
            onLike={props.onLike}
            onDislike={props.onDislike}
          />,
        </Col>
        <Col span={6}>
          <IconText
            type="user"
            text={props.post ? props.post.author : ""}
          />
        </Col>
        <Col span={6}>
          <IconText
            type="message"
            text={props.post ? props.post.commentCount : ""}
          />
        </Col>
        <Col span={6}>
          <IconText
            type="calendar"
            text={props.post ? formatDate(props.post.timestamp) : ""}
          />
        </Col>
      </Row>
      <Divider dashed />
      <p>{props.post ? props.post.body : ""}</p>
      <Divider dashed />
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </Card>
)

export default PostDetail
