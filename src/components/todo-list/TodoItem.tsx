import React, { FC } from 'react';
import classes from './TodoItem.module.scss';

const TodoItem: FC = () => (
  <li className={classes.TodoItem}>
    <div className={classes.TodoNum}>
      1.
    </div>
    <div className={classes.TodoTitle}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quaerat a. Consectetur, sed asperiores corporis officia debitis unde. Officiis, hic.
    </div>
    <button className={classes.TodoBtn} type='button'>
      <span></span><span></span><span></span>
    </button>
  </li>
);

export default TodoItem;
