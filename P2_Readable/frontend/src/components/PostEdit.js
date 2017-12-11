import React from "react"
import { Modal, Row, Col, Input } from "antd"

class PostEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  render() {
    console.log("POST EDIT", this.props)
    return (
      <Modal
        title="Edit"
        visible={this.props.visible}
        confirmLoading={this.props.loading}
        onOk={this.props.handleOK}
        onCancel={this.props.handleCancel}
      >
        <span>Title: <Input placeholder={this.props.title} /></span>
        <span>Author: <Input placeholder={this.props.author} /></span>
        <span>Content: <Input placeholder={this.props.content} autosize={{ minRows: 4, maxRows: 10 }} /></span>

      </Modal>
    )
  }
}

export default PostEdit
