import React, { FC, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove } from 'firebase/database';
import classes from './TodoItem.module.scss';
import { TodoType } from '../../types/types';
import { Menu, Dropdown } from 'antd';
import EditTodo from './edit-todo/EditTodo';

const TodoItem: FC<TodoType> = ({ todoId, descr, completed, idx }) => {

  const [edit, setEdit] = useState<boolean>(false);

  const removeTodoItem = (id: string,): void => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();
    remove(ref(db, `users/${userId}/todos/${id}`))
  }

  const editTodoItem = (): void => {
    setEdit(true);
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
          onClick={editTodoItem}
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
        {
          typeof (idx) !== 'undefined' ? idx + 1 : null
        }.
      </div>
      <div className={classes.TodoTitle}>
        {
          !edit
            ?
            descr
            :
            <EditTodo
              descr={descr}
              id={todoId}
              edit={setEdit}
            />
        }
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
