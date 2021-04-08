import React from 'react';
import logo1 from '../../images/1.png';
import logo2 from '../../images/2.png';
import logo3 from '../../images/3.png';
import logo4 from '../../images/4.png';
import logo5 from '../../images/5.png';
import './index.scss';

export function WhyUsComponent() {
  return (
    <section className="why-us">
      <span className="section-title">Почему нас выбирают</span>
      <div className="why-us_content">
        <div className="why-us_content_item">
          <img src={logo1} alt="one" />
          <span>Покраска по заводской технологии 3L </span>
        </div>
        <div className="why-us_content_item">
          <img src={logo2} alt="one" />
          <span>Подбор заводского цвета и реставрация от одного диска</span>
        </div>
        <div className="why-us_content_item">
          <img src={logo3} alt="one" />
          <span>Возможность оставить авто у нас в сервисе</span>
        </div>
        <div className="why-us_content_item">
          <img src={logo4} alt="one" />
          <span>48 часов – срок выполнения работ</span>
        </div>
        <div className="why-us_content_item">
          <img src={logo5} alt="one" />
          <span>36 месяцев гарантия на лакокрасочное покрытие</span>
        </div>
      </div>
    </section>
  );
}
