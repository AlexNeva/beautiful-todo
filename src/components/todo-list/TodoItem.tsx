import React, { FC } from 'react';
import classes from './TodoItem.module.scss';
import ITodo, { TodoType } from '../../types/types';

const TodoItem: FC<TodoType> = ({ todoId, descr, completed, idx }) => (
  <li className={classes.TodoItem}>
    <div className={classes.TodoNum}>
      {idx + 1}.
    </div>
    <div className={classes.TodoTitle}>
      {descr}
    </div>
    <button className={classes.TodoBtn} type='button'>
      <span></span><span></span><span></span>
    </button>
  </li>
);

export default TodoItem;
