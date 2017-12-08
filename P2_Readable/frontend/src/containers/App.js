import React from "react"
import { connect } from "react-redux"
import MainList from "../components/MainList"
import { message } from "antd"

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    title: `ant design part ${i}`,
    author: 'Leesper',
    commentCount: `${i}`,
    voteScore: `${i + i}`
  });
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log("dispatch", dispatch)
  }

  render() {
    return (
      <MainList listData={this.props.listData} />
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    category: state.category,
    categories: state.categories,
    isPostFetching: state.isPostFetching,
    listData
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onEdit: () => { message.info("edit") },
    onDelete: () => { message.info("delete") },
    onLike: () => { message.info("like") },
    onDislike: () => { message.info("dislike") },
    onMenuItemClick: ({ key }) => { message.info("menu item" + key) }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
