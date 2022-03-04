import React from 'react';
import Message from '../../components/message/Message';
import TodoList from '../../components/todo-list/TodoList';

const TodosPage = () => {
  return (
    <div>
      <Message>
        ToDo list is empty...
      </Message>
      <TodoList />
    </div>
  )
};

export default TodosPage;