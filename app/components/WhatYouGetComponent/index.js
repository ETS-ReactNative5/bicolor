import React from 'react';
import check from '../../images/check.png';
import './index.scss';

export function WhatYouGetComponent() {
  return (
    <section className="what-you-get">
      <span className="section-title">Что вы получите</span>
      <div className="lists">
        <ul>
          <li>
            <img src={check} alt="check" />
            <div className="info">
              <span className="title">
                Новые колесные диски по доступной цене
              </span>
              <span className="text">
                Реставрация дисков в BIKOLOR обойдется значительно дешевле
                покупки очередного комплекта.
              </span>
            </div>
          </li>
          <li>
            <img src={check} alt="check" />
            <div className="info">
              <span className="title">Тюнинг авто</span>
              <span className="text">
                Обновленные диски с сияющим покрытием точно выделят ваш
                автомобиль на дорогах.
              </span>
            </div>
          </li>
          <li>
            <img src={check} alt="check" />
            <div className="info">
              <span className="title">Оперативный сервис</span>
              <span className="text">
                Мы укладываемся в кратчайшие сроки. Время реализации услуги – 48
                часов.
              </span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <img src={check} alt="check" />
            <div className="info">
              <span className="title">Гарантию 36 месяцев</span>
              <span className="text">
                BIKOLOR ручается за долговечный презентабельный вид
                лакокрасочного покрытия!
              </span>
            </div>
          </li>
          <li>
            <img src={check} alt="check" />
            <div className="info">
              <span className="title">Удобное обслуживание</span>
              <span className="text">
                Вы можете оставить авто в нашем боксе или на своей территории –
                мы произведем все работы на месте.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
