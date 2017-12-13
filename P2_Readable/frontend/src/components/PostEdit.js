import React from "react"
import { Modal, Form, Input, Button, Select } from "antd"
import { hasErrors, guid } from "../utils"


const FormItem = Form.Item
const { TextArea } = Input
const { Option } = Select
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
        if (this.props.post.id) {
          this.props.handleEditPost(this.props.post.id, values.title, values.content)
        } else {
          this.props.handleAddPost(guid(), Date.now(), values.title, values.content, values.author, values.category)
        }
      }
    });
  }


  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const authorError = isFieldTouched('author') && getFieldError('author');
    const contentError = isFieldTouched('content') && getFieldError('content');
    return (
      <Modal
        title="Edit"
        visible={this.props.visible}
        footer={null}
        closable={false}
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

            {
              !this.props.post.id &&
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

            {
              !this.props.post.id &&
              <FormItem>
                  {getFieldDecorator('category', {
                    initialValue: "react"
                  })(
                    <Select>
                      {
                        this.props.categories
                        .filter(category => category.path !== "/")
                        .map(category => <Option key={category.path} value={category.path}>{category.name}</Option>)
                      }
                    </Select>
                  )}
              </FormItem>
            }

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
    console.log("PROPS POST", props)
    return {
      title: Form.createFormField({value: props.post.title}),
      author: Form.createFormField({value: props.post.author}),
      content: Form.createFormField({value: props.post.body}),
    }
  }
})(PostEditor)

export default PostEdit
