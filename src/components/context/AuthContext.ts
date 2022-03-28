import React from 'react'
import { AuthContextType, UserAuthType } from '../../types/types';

export const AuthContext = React.createContext<AuthContextType>({
  userAuth: {
    isAuth: false,
    isPending: true,
  },
  setAuth() { },
});
