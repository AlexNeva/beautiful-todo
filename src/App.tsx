import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.scss';
import Header from './components/header/Header';
import TodosPage from './pages/todos-page/TodosPage';
import MainPage from './pages/main-page/MainPage';
import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/signin/Signin';
import { AuthContext } from './components/context/AuthContext';
import Private from './components/hoc/Private';
import { routes } from './routes/routes';
import { UserAuthType } from './types/types';

const App = () => {



  const [userAuth, setAuth] = useState<UserAuthType>({
    isAuth: false,
    isPending: true,
  });

  const { isAuth, isPending } = userAuth;

  const checkUserAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('залогинен');
        setAuth({ isAuth: true, isPending: false })
      } else {
        console.log('не залогинен');
        setAuth({ isAuth: false, isPending: false })
      }

    });
  }

  useEffect(() => {
    const db = getDatabase();
    console.log(db.app.options.databaseURL);
    checkUserAuth();
  }, [])

  console.log(isAuth, isPending);

  if (isPending) {
    return <Spin
      size='large'
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
  }


  return (
    <AuthContext.Provider value={{ userAuth, setAuth }}>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path={routes.home.path} element={
              <Private>
                <MainPage />
              </Private>
            } />
            <Route path={routes.mytodos.path} element={
              <Private>
                <TodosPage />
              </Private>
            } />
            <Route path={routes.signup.path} element={
              <Private>
                <Signup />
              </Private>
            } />
            <Route path={routes.signin.path} element={
              <Private>
                <Signin />
              </Private>
            } />
          </Routes>
        </div>

      </div>
    </AuthContext.Provider>
  )
};

export default App;
