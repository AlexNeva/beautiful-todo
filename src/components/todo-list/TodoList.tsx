import React, { FC, useEffect, useState } from 'react';
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import { TodoType } from '../../types/types';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';
import Message from '../message/Message';


const TodoList: FC = () => {

  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = (): void => {
    const db = getDatabase();

    const todosRef = ref(db, `users/Glu8kWG6pXVMisx1D65EPtsMWc42/todos`);

    onChildAdded(todosRef, (data) => {
      setTodos((prev) => [...prev, data.val()])
    });
  }

  useEffect(() => {
    getTodos();
  }, [])

  console.log(todos);


  return (
    <>
      {
        !todos.length ?
          <Message>
            ToDo list is empty...
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
                  descr={todo.descr} />
              ))
            }
          </ul>
      }


    </>

  )
}

export default TodoList;
