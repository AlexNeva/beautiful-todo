import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import classes from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={classes.MainPage}>
      Привет. Самое время заняться делами!
      <p className={classes.Link}>
        <Link
          to={routes.mytodos.path}
          style={{}}>
          Перейти к списку дел
        </Link>
      </p>
    </div>
  )
}

export default MainPage;
