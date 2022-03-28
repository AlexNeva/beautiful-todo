import React, { FC, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { AuthContext } from '../context/AuthContext';


const Private: FC = ({ children }) => {

  const { isAuth, isPending } = useContext(AuthContext).userAuth;

  const location = useLocation();

  const isSignPage = location.pathname === routes.signin.path || location.pathname === routes.signup.path;

  if (!isAuth && !isSignPage) {
    return <Navigate to={routes.signin.path} state={{ from: location }} />
  }

  if (isAuth && isSignPage) {
    return <Navigate to={routes.home.path} state={{ from: location }} />
  }

  return <>{children}</>
}

export default Private;