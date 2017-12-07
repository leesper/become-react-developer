import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Menu, List, Avatar, Icon } from "antd"

const SubMenu = Menu.SubMenu
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const MainList = () => (
  <div>
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
              actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
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
