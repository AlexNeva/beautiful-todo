import React, { FC, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove, update, onValue } from 'firebase/database';
import classes from './TodoItem.module.scss';
import { TodoType } from '../../types/types';
import { Menu, Dropdown } from 'antd';
import EditTodo from './edit-todo/EditTodo';

const TodoItem: FC<TodoType> = ({ todoId, descr, idx }) => {

  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const db = getDatabase();

  const [edit, setEdit] = useState<boolean>(false);

  const [todo, setTodo] = useState<TodoType>();

  const todoStyle = () => (
    {
      backgroundColor: todo?.completed ? 'rgba(0,0,0,0.3)' : '#FFFFFF'
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
