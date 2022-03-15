import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routes';

const RedirectMessage: FC = () => {

  const linkStyle = {
    color: '#1890ff',

  }

  return (
    <p>
      Нет аккаунта? Пройдите <Link style={linkStyle} to={routes.signup.path}>регистрацию</Link>
    </p>
  )
}

export default RedirectMessage;
