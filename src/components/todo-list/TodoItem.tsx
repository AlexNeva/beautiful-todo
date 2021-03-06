import React, { FC, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove, update, onValue, off } from 'firebase/database';
import { TodoType } from '../../types/types';
import moment from 'moment';
import { Menu, Dropdown } from 'antd';
import EditTodo from './edit-todo/EditTodo';
import classes from './TodoItem.module.scss';

const TodoItem: FC<TodoType> = ({ todoId, descr, idx, createdAt }) => {

  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const db = getDatabase();

  const [edit, setEdit] = useState<boolean>(false);

  const [todo, setTodo] = useState<TodoType>();

  const todoStyle = () => (
    {
      backgroundColor: todo?.completed ? 'rgba(0,0,0,0.1)' : '#FFFFFF'
    }
  )

  const time = (timestamp: string | null | undefined) => {
    if (timestamp) {
      return moment(timestamp).format('D.M.yy HH:mm')
    }

    return 'время неизвестно'
  }

  const titleStyle = () => (
    {
      textDecoration: todo?.completed ? 'line-through' : 'none'
    }
  )

  const removeTodoItem = (id: string): void => {
    remove(ref(db, `users/${userId}/todos/${id}`))
  }

  const editTodoItem = (): void => {
    setEdit(true);
  }

  const completeTodoItem = (): void => {
    update(ref(db, `users/${userId}/todos/${todoId}`), { ...todo, completed: !todo?.completed })
  }

  useEffect(() => {
    onValue(ref(db, `users/${userId}/todos/${todoId}`), (snapshot) => {
      setTodo(snapshot.val())
    });

    return () => {
      off(ref(db, `users/${userId}/todos/${todoId}`));
    }
  }, [])

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
          onClick={completeTodoItem}
        >
          выполнено
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <li
      className={classes.TodoItem}
      style={todoStyle()}
    >
      <div className={classes.TodoNum}>
        {
          typeof (idx) !== 'undefined' ? idx + 1 : null
        }.
      </div>
      <div
        className={classes.TodoTitle}
        style={titleStyle()}
      >
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
      <div className={classes.TodoTime}>
        {time(createdAt)}
      </div>
    </li>
  )

};

export default TodoItem;
