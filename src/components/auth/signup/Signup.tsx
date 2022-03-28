import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { AuthRequestType, AuthResponseType } from '../../../types/types';
import { routes } from '../../../routes/routes';



const Signup = () => {

  type MessagesType = { [property: string]: string };

  const navigate = useNavigate();

  const messages: MessagesType = {
    success: 'аккаунт успешно создан',
    'Firebase: Error (auth/email-already-in-use).': 'адрес электронной почты уже используется другим аккаунтом.',
    OPERATION_NOT_ALLOWED: 'для этого проекта отключен вход с паролем.',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.'
  }

  const [user, setUser] = useState<AuthRequestType>({
    email: '',
    password: '',
    returnSecureToken: true
  })


  const createAccount = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(res => {
        message.success(messages.success);
        navigate(routes.signin.path);
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
      onFinish={createAccount}
      validateTrigger='onBlur'
      style={
        {
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto'
        }
      }
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Введите корректный email' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: 'Введите пароль' },
          { min: 6, max: 12, message: 'Пароль должен содержать не менее 6 и не более 12 символов' }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Согласие на обработку персональных данных</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Signup;