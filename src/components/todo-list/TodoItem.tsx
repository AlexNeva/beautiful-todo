import React, { FC } from 'react';
import classes from './TodoItem.module.scss';
import ITodo from '../../types/types';

const TodoItem: FC<ITodo> = ({ userId, id, title, completed }) => (
  <li className={classes.TodoItem}>
    <div className={classes.TodoNum}>
      {id}.
    </div>
    <div className={classes.TodoTitle}>
      {title}
    </div>
    <button className={classes.TodoBtn} type='button'>
      <span></span><span></span><span></span>
    </button>
  </li>
);

export default TodoItem;
