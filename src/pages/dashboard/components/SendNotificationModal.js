import React, { Component } from 'react';
import { Modal, Button, Input, Select, Form } from 'antd';
import { SEND_NOTIFICATION } from '../duck';
import styles from '../styles';
import { getFieldValues } from '../../../utils';

const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;
const FormItem = Form.Item;

class SendNotificationModal extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.props.addNotification(getFieldValues(values));
      }
    });
  };

  handleAfterClose = () => {
    this.props.form.resetFields();
  };

  handleChange = lastName => {
    this.props.searchUser({ lastName });
  };

  render() {
    const {
      isSendNotificationModalOpen,
      searchedUsers,

      isAddingNotification,

      toggleModal,
      // user,
      form,
    } = this.props;

    return (
      <Modal
        title="Send Notification"
        visible={isSendNotificationModalOpen}
        onOk={() => toggleModal(SEND_NOTIFICATION)}
        onCancel={() => toggleModal(SEND_NOTIFICATION)}
        destroyOnClose
        footer={[
          <Button key="back" onClick={() => toggleModal(SEND_NOTIFICATION)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            onClick={this.handleFormSubmit}
            loading={isAddingNotification}
          >
            Send
          </Button>,
        ]}
      >
        <Form onSubmit={this.handleFormSubmit}>
          <FormItem required>
            {form.getFieldDecorator('user@@addNotification', {
              rules: [
                {
                  required: true,
                  message: 'Please input user',
                  whitespace: true,
                },
              ],
            })(
              <Select
                mode="combobox"
                // value={value}
                placeholder="Select user"
                filterOption={false}
                style={styles.toUserBox}
                defaultActiveFirstOption={false}
                showArrow={false}
                onChange={this.handleChange}
              >
                {searchedUsers.map(user => (
                  <Option key={`${user.firstName} ${user.lastName}`}>
                    {user.firstName} {user.lastName}
                  </Option>
                ))}
              </Select>,
            )}
          </FormItem>
          <FormItem label="Message" required>
            {form.getFieldDecorator('message@@addNotification', {
              rules: [
                {
                  required: true,
                  message: 'Please input message',
                  whitespace: true,
                },
              ],
            })(
              <TextArea
                rows={5}
                placeholder="Enter message here..."
                style={styles.messageBox}
              />,
            )}
          </FormItem>
          <FormItem label="Priority">
            {form.getFieldDecorator('priority@@addNotification', {
              initialValue: 'Normal',
              rules: [
                {
                  required: true,
                  message: 'Please select level of priority',
                },
              ],
            })(
              <Select placeholder="Select Priority Level">
                <Option value="High">High</Option>
                <Option value="Normal">Normal</Option>
                <Option value="Low">Low</Option>
              </Select>,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(SendNotificationModal);
