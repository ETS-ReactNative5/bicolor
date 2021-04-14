import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from 'react-router-dom';
import './index.scss';

export function ServicesComponent() {
  const [isSent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    city: '',
    phone: '',
  });
  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    });
  };
  const submitForm = ev => {
    ev.preventDefault();
    setSent(true);
  };
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
      <ScrollableAnchor id="order_call">
        <div className="call_form">
          <span className="free">Бесплатно!</span>
          <span className="color">
            Подбор цвета в любом удобном для вас месте
          </span>
          <div className="form-container">
            <div className="form-container_text">
              <p>
                Подбор цвета по каталогу, консультация. Выезд нашего специалиста
                в удобное для вас время и место в пределах города – бесплатно!
              </p>
              <p>Доставка покрашенных дисков до клиента – бесплатно!</p>
              <p>Можете оставить авто у нас!</p>
              <p>Расчет после всех работ!</p>
            </div>
            <form onSubmit={submitForm} className="form-container_form">
              <label htmlFor="name">Имя</label>
              <input
                placeholder="Введите имя"
                value={form.name}
                id="name"
                onChange={handleChange}
                required
              />
              <label htmlFor="city">Город </label>
              <input
                placeholder="Введите Ваш город"
                value={form.city}
                id="city"
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Телефон</label>
              <input
                placeholder="Пример: 8 902 910 1234"
                value={form.phone}
                id="phone"
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                className="form-container_form_button"
              >
                Заказать подбор цвета
              </Button>
            </form>
          </div>
        </div>
      </ScrollableAnchor>
    </section>
  );
}
