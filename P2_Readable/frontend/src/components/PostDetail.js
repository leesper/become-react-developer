import React from "react"
import { Card, Button, Row, Col, Divider, List, Avatar } from "antd"
import { Link } from "react-router-dom"

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
    extra={<Link to="/">back</Link>}
    actions={[
      <Button icon="edit" type="primary">Edit</Button>,
      <Button icon="delete" type="danger">Delete</Button>
    ]}
    >
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1>Title</h1>
        </Col>
      </Row>
      <Divider dashed />
      <Row>
        <Col span={6}>Author</Col>
        <Col span={6}>Comments</Col>
        <Col span={6}>Voter</Col>
        <Col span={6}>Timestamp</Col>
      </Row>
      <Divider dashed />
      <p>This is post.</p>
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
