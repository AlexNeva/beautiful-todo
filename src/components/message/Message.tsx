import React, { FC } from 'react';
import classes from './Message.module.scss';

const Message: FC = ({ children }) => (
  <p className={classes.Message}>{children}</p>
);

export default Message;
