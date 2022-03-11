import React, { FC, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Private: FC = ({ children }) => {

  const { isAuth } = useContext(AuthContext);

  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/signin' state={{ from: location }} />
  }

  return <>{children}</>
}

export default Private;