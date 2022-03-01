import React, { FC } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';

const TodoList: FC = () => (
  <ul className={`${classes.TodoList} todo-list`}>
    <TodoItem />
  </ul>
);

export default TodoList;
