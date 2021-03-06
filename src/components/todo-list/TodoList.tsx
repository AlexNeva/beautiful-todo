import React, { FC, useEffect, useState } from 'react';
import { getDatabase, ref, onChildAdded, onChildRemoved, onChildChanged } from "firebase/database";
import { TodoType } from '../../types/types';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';
import Message from '../message/Message';
import { getAuth } from 'firebase/auth';


const TodoList: FC = () => {

  const [todos, setTodos] = useState<TodoType[]>([]);

  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  const getTodos = (): void => {
    const db = getDatabase();

    const todosRef = ref(db, `users/${userId}/todos`);

    onChildAdded(todosRef, (data) => {
      setTodos((prev) => [...prev.reverse(), data.val()])
    });
    onChildRemoved(todosRef, (data) => {
      setTodos((prev) => (
        prev.filter((todo) => todo.todoId !== data.key).reverse()
      ))
    });
    onChildChanged(todosRef, (data) => {
      setTodos((prev) => prev.map((item) => item.todoId === data.key ? { ...data.val() } : item).reverse())
    });
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <>
      {
        !todos.length ?
          <Message>
            Cписок дел пуст...
          </Message>
          :
          <ul className={`${classes.TodoList} todo-list`}>
            {
              [...todos.reverse()].map((todo, idx) => (
                <TodoItem
                  key={todo.todoId}
                  todoId={todo.todoId}
                  idx={idx}
                  completed={todo.completed}
                  descr={todo.descr}
                  createdAt={todo.createdAt}
                />

              ))
            }
          </ul>
      }


    </>

  )
}

export default TodoList;
