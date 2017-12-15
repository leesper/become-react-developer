import React from "react"
import { Modal, Form, Input, Button } from "antd"
import { hasErrors } from "../utils"

const FormItem = Form.Item
class CommentEditor extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (this.props.comment.id) {
          this.props.handleEditComment(this.props.comment.id, values.comment)
        } else {
          this.props.handleAddComment(values.author, values.comment)
        }
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const authorError = isFieldTouched('author') && getFieldError('author');
    const commentError = isFieldTouched('comment') && getFieldError('comment');
    return (
      <Modal
        title="Comment"
        visible={this.props.visible}
        confirmLoading={this.props.loading}
        footer={null}
        closable={false}
        >
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={commentError ? 'error' : ''}
              help={commentError || ''}
              >
                {getFieldDecorator('comment', {
                  rules: [{ required: true, message: 'Please input comment!' }],
                })(
                  <Input placeholder="comment" />
                )}
            </FormItem>

            {
              this.props.comment && !this.props.comment.id &&
              <FormItem
                validateStatus={authorError ? 'error' : ''}
                help={authorError || ''}
                >
                  {getFieldDecorator('author', {
                    rules: [{ required: true, message: 'Please input author!' }],
                  })(
                    <Input placeholder="author" />
                  )}
              </FormItem>
            }

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                OK
              </Button>
              <Button
                type="normal"
                onClick={this.props.handleCancel}
              >
                Cancel
              </Button>
            </FormItem>
          </Form>
        </Modal>
    )
  }
}

const CommentEdit = Form.create({
  mapPropsToFields(props) {
    return {
      author: Form.createFormField({value: props.comment && props.comment.author}),
      comment: Form.createFormField({value: props.comment && props.comment.body})
    }
  }
})(CommentEditor)

export default CommentEdit
