import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const RedirectMessage: FC = () => {

  const linkStyle = {
    color: '#1890ff',

  }

  return (
    <p>
      Нет аккаунта? Пройдите <Link style={linkStyle} to={'/signup'}>регистрацию</Link>
    </p>
  )
}

export default RedirectMessage;
