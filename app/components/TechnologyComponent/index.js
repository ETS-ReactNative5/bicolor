import React from 'react';
import merc from '../../images/mercedes.png';
import bmw from '../../images/bmw.png';
import audi from '../../images/audi.png';
import './index.scss';

export function TechnologyComponent() {
  return (
    <section className="technology">
      <span className="section-title">Технология</span>
      <p>
        Методика покраски дисков 3L, применяемая в нашей компании, используется
        крупнейшими производителями дисков в Европе и Америке. Диски, окрашенные
        по технологии 3L, поставляются на заводы авторитетных дилеров: BMW,
        Mercedes, Audi и GM.
      </p>
      <div className="images">
        <img src={merc} alt="mercedes" />
        <img src={audi} alt="audi" />
        <img src={bmw} alt="bmw" />
      </div>
      <button className="more-button" type="button">
        Подробнее
      </button>
    </section>
  );
}
