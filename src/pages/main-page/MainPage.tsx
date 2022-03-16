import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

const MainPage = () => {
  return (
    <div>
      Привет, username. Самое время заняться делами!
      <p>
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
