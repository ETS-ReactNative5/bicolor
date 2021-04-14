import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import dots from '../../images/dots.svg';
import reverse from '../../images/reverse_dots.svg';
import './index.scss';

export function ProcessComponent() {
  return (
    <section className="process">
      <span className="section-title">Процесс работы</span>
      <div className="process_steps">
        <div className="process_steps__step">
          <span className="text">Звонок/заказ через сайт</span>
          <Tooltip
            arrow
            placement="top"
            title="Позвоните нам или закажите звонок через сайт."
          >
            <div className="number">1</div>
          </Tooltip>
        </div>
        <img src={dots} className="dots" alt="dots" />
        <div className="process_steps__step">
          <span className="text">Выезд специалиста</span>
          <Tooltip
            arrow
            placement="top"
            title="Наш выездной специалист проведёт консультацию и осуществит забор колёс. При желании вы можете оставить автомобиль в нашем боксе."
          >
            <div className="number">2</div>
          </Tooltip>
        </div>
        <img src={reverse} className="dots" alt="dots" />
        <div className="process_steps__step">
          <span className="text">Диагностика</span>
          <Tooltip
            arrow
            placement="top"
            title="Произведём диагностику и устраним все дефекты, осуществим шиномонтаж."
          >
            <div className="number">3</div>
          </Tooltip>
        </div>
        <img src={dots} className="dots" alt="dots" />
        <div className="process_steps__step">
          <span className="text">Доставка</span>
          <Tooltip
            arrow
            placement="top"
            title="Сотрудник BIKOLOR доставит колеса в отличном виде в оговоренный срок."
          >
            <div className="number">4</div>
          </Tooltip>
        </div>
      </div>
      <a href="#order_call" className="order">Заказать подбор цвета бесплатно</a>
    </section>
  );
}
