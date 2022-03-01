import React, { FC } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => (
  <div className={`${classes.Header} header`}>
    <div className="container">
      ToDo
    </div>
  </div>
);

export default Header;
