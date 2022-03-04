import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import SignupPage from './pages/signup-page/SignupPage';
import TodosPage from './pages/todos-page/TodosPage';

const App = () => (
  <div className="App">
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/mytodos' element={<TodosPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>

  </div>

);

export default App;
