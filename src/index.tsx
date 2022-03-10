import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import App from './App';
import 'antd/dist/antd.css';
import './scss/index.scss';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "beautiful-todo.firebaseapp.com",
  databaseURL: "https://beautiful-todo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "beautiful-todo",
  storageBucket: "beautiful-todo.appspot.com",
  messagingSenderId: "82946637044",
  appId: "1:82946637044:web:af11015490b1a50c37f2a1"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
