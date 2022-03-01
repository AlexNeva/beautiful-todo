import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Message from './components/message/Message';
import TodoList from './components/todo-list/TodoList';

const App = () => (
  <div className="App">
    <Header />
    <div className='container'>
      <Message>
        ToDo list is empty...
      </Message>
      <TodoList />
    </div>
  </div>

);

export default App;
