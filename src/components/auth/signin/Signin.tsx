import React, { useState, useContext } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { AuthRequestType, AuthResponseType } from '../../../types/types';
import AuthService from '../../../API/authService';
import { AuthContext } from '../../context/AuthContext';

const Signin = () => {

  const { setAuth } = useContext(AuthContext);

  type MessagesType = { [property: string]: string };

  const messages: MessagesType = {
    success: 'вы успешно вошли',
    EMAIL_NOT_FOUND: 'нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.',
    INVALID_PASSWORD: 'пароль недействителен или у пользователя нет пароля.',
    USER_DISABLED: 'учетная запись пользователя отключена администратором.,'
  }

  const [user, setUser] = useState<AuthRequestType>({
    email: '',
    password: '',
    returnSecureToken: true
  })


  const signin = () => {
    const authService = new AuthService();
    authService.login(user)
      .then(res => {
        message.success(messages.success);
        setAuth(true);
      })
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
      onFinish={signin}
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

export default Signin;