import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import './App.scss';
import Header from './components/header/Header';
import TodosPage from './pages/todos-page/TodosPage';
import MainPage from './pages/main-page/MainPage';
import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/signin/Signin';


const App = () => {

  useEffect(() => {
    const db = getDatabase();
    console.log(db);

  }, [])

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mytodos' element={<TodosPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

        </Routes>
      </div>

    </div>
  )
};


export default App;
