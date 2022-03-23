import React from 'react';

import AddTodoForm from '../../components/todo-list/add-todo/AddTodoForm';
import TodoList from '../../components/todo-list/TodoList';

const TodosPage = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  )
};

export default TodosPage;