import React, { FC } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove } from 'firebase/database';
import classes from './TodoItem.module.scss';
import ITodo, { TodoType } from '../../types/types';
import { Menu, Dropdown } from 'antd';




const TodoItem: FC<TodoType> = ({ todoId, descr, completed, idx }) => {


  const removeTodoItem = (id: string,): void => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();
    remove(ref(db, `users/${userId}/todos/${id}`))
      .then((response) => {
        console.log('ok');

      })
  }


  const menu = (
    <Menu>
      <Menu.Item key='delete'>
        <button
          className={classes.TodoActionBtn}
          type='button'
          onClick={() => removeTodoItem(todoId)}
        >
          удалить
        </button>
      </Menu.Item>
      <Menu.Item key='edit'>
        <button
          className={classes.TodoActionBtn}
          type='button'
        >
          редактировать
        </button>
      </Menu.Item>
      <Menu.Item key='complete'>
        <button
          className={classes.TodoActionBtn}
          type='button'
        >
          выполнено
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <li className={classes.TodoItem}>
      <div className={classes.TodoNum}>
        {idx + 1}.
      </div>
      <div className={classes.TodoTitle}>
        {descr}
      </div>
      <Dropdown overlay={menu} placement="bottomRight">
        <button className={classes.TodoBtn} type='button'>
          <span></span><span></span><span></span>
        </button>
      </Dropdown>

    </li>
  )

};

export default TodoItem;
