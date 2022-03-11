import React from 'react'
import { AuthContextType } from '../../types/types';

export const AuthContext = React.createContext<AuthContextType>({
  isAuth: false,
  setAuth() { },
});
