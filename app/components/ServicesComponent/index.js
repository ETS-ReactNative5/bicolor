import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export function ServicesComponent() {
  return (
    <section className="services">
      <span className="section-title">Услуги</span>
      <div className="services_blocks">
        <div className="service">
          <span className="service_name">Правка</span>
          <p className="service_desc">
            Восстановление геометрии колесного диска на высокоточном
            оборудовании.
          </p>
          <span className="service_price">
            Цена от: <strong>700 &#8381;</strong>
          </span>
          <Link className="service_link" to="/pravka">
            Подробнее
          </Link>
        </div>
        <div className="service">
          <span className="service_name">Покраска</span>
          <p className="service_desc">Покраска дисков по технологии 3L.</p>
          <span className="service_price">
            Цена от: <strong>1500 &#8381;</strong>
          </span>
          <Link className="service_link" to="/pokraska">
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
}
