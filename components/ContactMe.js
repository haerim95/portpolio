import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import StyledTitle from './Titles';
import { init } from 'emailjs-com';
import { send } from 'emailjs-com';

const onSubmit = (e) => {
  send('ajmhoho', 'template_sv21t8n');
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ContactMe = () => {
  useEffect(() => {
    init('user_O303wSkf7tVofLIJptu7o');
  }, []);

  return (
    <div style={{ marginBottom: '4rem' }}>
      <StyledTitle>
        <span>💌 Contact Me </span>
      </StyledTitle>
      <div style={{ width: '80%' }}>
        <Form
          {...layout}
          name='messages'
          // onFinish={onFinish}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label='성명'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label='Email'
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'website']} label='기업명'>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label='Message'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              style={{ backgroundColor: '#5e4462', color: '#ffffff' }}
              htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactMe;
