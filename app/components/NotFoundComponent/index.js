import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';
import './index.scss';

export function NotFoundComponent() {
  return (
    <section className="not-found">
      <img className="not-found_image" src={notFound} alt="404" />
      <p className="not-found_text">
        Ой ! Что–то пошло не так или такой страницы уже не существует. Но вы
        можете перейти на главную страничку, мы уверенеы, там вы найдете все,
        что вам нужно.
      </p>
      <Link className="not-found_link" to="/">
        Перейти на главную
      </Link>
    </section>
  );
}
