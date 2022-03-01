import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Message from './components/message/Message';

const App = () => (
  <div className="App">
    <Header />
    <div className='container'>
      <Message>
        ToDo list is empty...
      </Message>
    </div>
  </div>

);

export default App;
