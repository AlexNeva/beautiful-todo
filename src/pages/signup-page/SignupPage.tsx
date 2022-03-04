import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const SignupPage = () => {
  return (
    <div>
      <Form
        name="signup-form"

        initialValues={{ remember: true }}
        autoComplete="off"
        layout='vertical'
      >
        <Form.Item
          label="Имя"
          name="username"
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" required>
          <Checkbox>Согласие на обработку персональных данных</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignupPage;
