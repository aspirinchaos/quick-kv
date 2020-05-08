import React from 'react';

const NotFound = () => (
  <div className={'middle-box text-center'}>
    <h1>404</h1>
    <h3 className={'font-bold'}>Страница не найдена</h3>

    <div className={'error-desc'}>
      Вы попали на несуществующую страницу, вернитесь назад пожалуйста.
    </div>
  </div>
);

export default NotFound;
