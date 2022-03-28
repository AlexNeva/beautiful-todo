import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Menu: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={routes.home.path}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={routes.mytodos.path}>Мои дела</NavLink>
        </li>
        <li>
          <NavLink to={routes.signup.path}>Регистрация</NavLink>
        </li>
        <li>
          <NavLink to={routes.signin.path}>Войти</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
