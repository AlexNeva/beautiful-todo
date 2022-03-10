import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { SignupRequestType, SignupResponseType } from '../../../types/types';
import AuthService from '../../../API/authService';



const Signup = () => {

  type MessagesType = { [property: string]: string };

  const messages: MessagesType = {
    success: 'аккаунт успешно создан',
    EMAIL_EXISTS: 'адрес электронной почты уже используется другим аккаунтом.',
    OPERATION_NOT_ALLOWED: 'для этого проекта отключен вход с паролем.',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.'
  }

  const [user, setUser] = useState<SignupRequestType>({
    email: '',
    password: '',
    returnSecureToken: true
  })


  const createAccount = () => {
    const authService = new AuthService();
    authService.createAccount(user)
      .then(res => message.success(messages.success))
      .catch(err => {
        const key = err.error.message;
        message.error(messages[key]);
      })
  }


  return (
    <Form
      name="signup-form"
      initialValues={{ remember: true }}
      layout='vertical'
      onValuesChange={(changedValues, allValues) => setUser({ ...user, ...changedValues })}
      onFinish={createAccount}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Введите email' }]}
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
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Согласие на обработку персональных данных</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Signup;