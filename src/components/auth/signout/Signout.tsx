import React, { FC } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { message } from 'antd';

const Signout: FC = () => {

  type MessagesType = { [property: string]: string };


  const messages: MessagesType = {
    error: 'Возникла ошибка. Попробуйте снова',
    success: 'Вы успешно вышли из личного кабинета',
  }

  const signout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      message.success(messages.success);
    }).catch(() => {
      message.error(messages.error);
    });
  }

  return (
    <button type='button' onClick={signout}>
      Выйти
    </button>
  )
}

export default Signout;
