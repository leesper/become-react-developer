import React from "react"
import { Modal, Input } from "antd"

const CommentEdit = ({ visible, loading, author, comment, handleOK, handleCancel }) => (
  <Modal
    title="Comment"
    visible={visible}
    confirmLoading={loading}
    onOk={handleOK}
    onCancel={handleCancel}
    >
      <Input placeholder={author ? "" : "Author"} defaultValue={author ? author : ""} />
      <Input placeholder={comment ? "" : "comment"} defaultValue={comment ? comment : ""} />
  </Modal>
)

export default CommentEdit
