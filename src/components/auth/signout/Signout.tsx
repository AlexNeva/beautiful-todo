import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from '../../context/AuthContext';
import { routes } from '../../../routes/routes';
import { message } from 'antd';

const Signout: FC = () => {

  type MessagesType = { [property: string]: string };

  const navigate = useNavigate();


  const messages: MessagesType = {
    error: 'Возникла ошибка. Попробуйте снова'
  }



  const { setAuth } = useContext(AuthContext);

  const signout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // navigate(routes.signin.path);
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
