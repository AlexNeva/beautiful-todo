import React, { FC } from 'react';
import Menu from '../menu/Menu';
import classes from './Header.module.scss';

const Header: FC = () => (
  <div className={`${classes.Header} header`}>
    <div className={`${classes.HeaderContainer} container`}>
      ToDo
      <Menu />
    </div>
  </div>
);

export default Header;
