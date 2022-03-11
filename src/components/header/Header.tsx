import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const Header: FC = () => (
  <div className={`${classes.Header} header`}>
    <div className='container'>
      <nav className={classes.HeaderNav}>
        <ul className={classes.HeaderNavList}>
          <li className={classes.HeaderNavItem}>
            <NavLink to={'/'}>ToDo</NavLink>
          </li>
          <li className={classes.HeaderNavItem}>
            <NavLink to={'/signup'}>Регистрация</NavLink>
          </li>
          <li className={classes.HeaderNavItem}>
            <NavLink to={'/signin'}>Войти</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
