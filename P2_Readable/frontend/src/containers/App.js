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

const mapStateToProps = (state, ownProps) => (
  {
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

const App = connect(mapStateToProps, mapDispatchToProps)(MainList)

export default App
