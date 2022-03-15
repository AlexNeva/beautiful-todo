import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import './App.scss';
import Header from './components/header/Header';
import TodosPage from './pages/todos-page/TodosPage';
import MainPage from './pages/main-page/MainPage';
import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/signin/Signin';
import { AuthContext } from './components/context/AuthContext';
import Private from './components/hoc/Private';
import { routes } from './routes/routes';


const App = () => {

  const [isAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const db = getDatabase();
    console.log(db.app.options.databaseURL);

  }, [])

  console.log(isAuth);


  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
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
            <Route path={routes.signup.path} element={<Signup />} />
            <Route path={routes.signin.path} element={<Signin />} />
          </Routes>
        </div>

      </div>
    </AuthContext.Provider>

  )
};


export default App;
