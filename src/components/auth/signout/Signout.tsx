import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Signout: FC = () => {

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const signout = () => {
    setAuth(false);
    navigate('/signin');
  }

  return (
    <button type='button' onClick={signout}>
      Выйти
    </button>
  )
}

export default Signout;
