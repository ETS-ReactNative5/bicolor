import React from 'react';
import './index.scss';
import { Button } from '@material-ui/core';
import first from '../../images/3l/first_layer.png';
import second from '../../images/3l/second_layer.png';
import third from '../../images/3l/third_layer.png';
import shadow from '../../images/3l/shadow.png';
import text from '../../images/3l/text.png';
import pointer1 from '../../images/3l/pointer_second.png';
import pointer2 from '../../images/3l/pointer_first.png';
import pointer3 from '../../images/3l/pointer_third.png';

export function ThreeLayersComponent() {
  return (
    <section className="three-layers">
      <span className="section-title">Технология 3L</span>
      <div className="three-layers_content">
        <div className="three-layers_content_image">
          <img className="text" src={text} alt="three-layers" />
          <img className="layer layer-first" src={first} alt="first layer" />
          <img className="layer layer-third" src={third} alt="third layer" />
          <img className="layer layer-second" src={second} alt="second layer" />
          <img className="layer layer-shadow" src={shadow} alt="shadow" />
        </div>
        <div className="three-layers_content_pointers">
          <div className="pointer pointer-first">
            <span>Жидкий защитный лак</span>
            <img src={pointer1} alt="pointer 1" />
          </div>
          <div className="pointer pointer-second">
            <span>Жидкая краска металлик</span>
            <img src={pointer2} alt="pointer 2" />
          </div>
          <div className="pointer pointer-third">
            <span>Порошковый глянцевый грунт</span>
            <img src={pointer3} alt="pointer 3" />
          </div>
        </div>
        <div className="three-layers_content_info">
          <span>
            Мы используем передовую трёхслойную окраску «3L», которая
            обеспечивает:
          </span>
          <ul>
            <li>
              Безупречный привлекательный вид цветов и оттенков металликов
            </li>
            <li>Надежную защиту дисков от внешней среды</li>
            <li>100% обновленное колесо</li>
            <li>
              Только профессиональное специальное оборудование и материалы
            </li>
          </ul>
        </div>
      </div>
      <Button className="three-layers_button transparent" variant="contained">
        Подробнее
      </Button>
    </section>
  );
}
