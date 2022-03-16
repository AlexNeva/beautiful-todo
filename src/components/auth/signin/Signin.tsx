import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { AuthRequestType, AuthResponseType } from '../../../types/types';
import { AuthContext } from '../../context/AuthContext';
import RedirectMessage from '../redirect-message/RedirectMessage';
import { routes } from '../../../routes/routes';

const Signin = () => {

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  type MessagesType = { [property: string]: string };

  const messages: MessagesType = {
    success: 'вы успешно вошли',
    'Firebase: Error (auth/user-not-found).': 'нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.',
    'Firebase: Error (auth/wrong-password).': 'пароль недействителен или у пользователя нет пароля.',
    USER_DISABLED: 'учетная запись пользователя отключена администратором.,'
  }

  const [user, setUser] = useState<AuthRequestType>({
    email: '',
    password: '',
    returnSecureToken: true
  })


  const signin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(res => {
        message.success(messages.success);
        navigate(routes.home.path);
      })
      .catch(err => {
        const key = err.message;
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
      style={
        {
          maxWidth: '600px',
          margin: '0 auto'
        }
      }
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
          Войти
        </Button>
      </Form.Item>
      <Form.Item>
        <RedirectMessage />
      </Form.Item>
    </Form>
  )
};

export default Signin;