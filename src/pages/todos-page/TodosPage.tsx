import React, { FC } from 'react';

import AddTodoForm from '../../components/todo-list/add-todo/AddTodoForm';
import TodoList from '../../components/todo-list/TodoList';

const TodosPage: FC = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  )
};

export default TodosPage;