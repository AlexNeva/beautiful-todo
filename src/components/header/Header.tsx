import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Signout from '../auth/signout/Signout';
import { AuthContext } from '../context/AuthContext';
import classes from './Header.module.scss';

const Header: FC = () => {

  const { isAuth } = useContext(AuthContext).userAuth;

  return (
    <div className={`${classes.Header} header`}>
      <div className={`${classes.HeaderContainer} container`}>
        <nav className={classes.HeaderNav}>
          <ul className={classes.HeaderNavList}>
            <li className={classes.HeaderNavItem}>
              <NavLink to={routes.home.path}>ToDo</NavLink>
            </li>
            {
              !isAuth &&
              <>
                <li className={classes.HeaderNavItem}>
                  <NavLink to={routes.signup.path}>Регистрация</NavLink>
                </li>
                <li className={classes.HeaderNavItem}>
                  <NavLink to={routes.signin.path}>Войти</NavLink>
                </li>
              </>
            }
          </ul>
        </nav>
        {
          isAuth &&
          <Signout />
        }
      </div>
    </div>
  )
};

export default Header;
