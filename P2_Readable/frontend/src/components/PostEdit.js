import React from "react"
import { Modal, Form, Icon, Input, Button } from "antd"
import { hasErrors } from "../utils"


const FormItem = Form.Item
const { TextArea } = Input
class PostEditor extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, setFieldsValue } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const authorError = isFieldTouched('author') && getFieldError('author');
    const contentError = isFieldTouched('content') && getFieldError('content');
    const title = this.props.title
    return (
      <Modal
        title="Edit"
        visible={this.props.visible}
        confirmLoading={this.props.loading}
        footer={null}
        >
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={titleError ? 'error' : ''}
              help={titleError || ''}
              >
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input title!' }]
                })(
                  <Input placeholder="title" />
                )}
            </FormItem>
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
            <FormItem
              validateStatus={contentError ? 'error' : ''}
              help={contentError || ''}
              >
                {getFieldDecorator('content', {
                  rules: [{ required: true, message: 'Please input content!' }],
                })(
                  <TextArea placeholder="content" autosize={{ minRows: 4, maxRows: 10 }} />
                )}
            </FormItem>

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
    );
  }
}

const PostEdit = Form.create({
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({value: props.title}),
      author: Form.createFormField({value: props.author}),
      content: Form.createFormField({value: props.content})
    }
  }
})(PostEditor)

export default PostEdit
