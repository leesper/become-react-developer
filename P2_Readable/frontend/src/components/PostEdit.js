import React from "react"
import { Modal, Input } from "antd"

const { TextArea } = Input
const PostEdit = ({ visible, loading, handleOK, handleCancel, title, author, content }) => (
  <Modal
    title="Edit"
    visible={visible}
    confirmLoading={loading}
    onOk={handleOK}
    onCancel={handleCancel}
    >
      <Input placeholder={title ? "" : "Title"} defaultValue={title ? title : ""} />
      <Input placeholder={author ? "" : "Author"} defaultValue={author ? author : ""} />
      <TextArea placeholder={content ? "" : "content"} defaultValue={content ? content : ""} autosize={{ minRows: 4, maxRows: 10 }} />
  </Modal>
)

export default PostEdit
