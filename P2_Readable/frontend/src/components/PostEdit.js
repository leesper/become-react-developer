import React from "react"
import { Modal, Input } from "antd"

const { TextArea } = Input
const PostEdit = ({ visible, confirmLoading, handleOK, handleCancel, title = "Title", author = "Author", content = "content" }) => (
  <Modal
    title="Edit"
    visible={visible}
    confirmLoading={confirmLoading}
    onOK={handleOK}
    onCancel={handleCancel}
    >
      <Input placeholder={title} />
      <Input placeholder={author} />
      <TextArea placeholder={content} autosize={{ minRows: 4, maxRows: 10 }} />
  </Modal>
)

export default PostEdit
