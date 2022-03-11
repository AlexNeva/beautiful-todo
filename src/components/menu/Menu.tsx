import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Menu: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={'/mytodos'}>Мои дела</NavLink>
        </li>
        <li>
          <NavLink to={'/signup'}>Регистрация</NavLink>
        </li>
        <li>
          <NavLink to={'/signin'}>Войти</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
