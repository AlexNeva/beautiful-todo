import React, { FC, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';
import ITodo from '../../types/types';
import TodoService from '../../API/todoService';





const TodoList: FC = () => {
  const todoService = new TodoService();

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    todoService.getTodos()
      .then(res => {
        setTodos(res)
      })
  }, [])

  return (
    <ul className={`${classes.TodoList} todo-list`}>
      {
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            userId={todo.userId}
            id={todo.id}
            completed={todo.completed}
            title={todo.title} />
        ))
      }
    </ul>
  )
}

export default TodoList;
