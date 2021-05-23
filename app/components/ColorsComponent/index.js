import React from 'react';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import './index.scss';

export default function ColorsComponent(props) {
  if (!props.colors) return '';
  return (
    <section className="colors">
      <span className="section-title">Цветовые решения</span>
      {document.documentElement.clientWidth > 767 && (
        <Carousel itemsToScroll={3} itemsToShow={3}>
          {props.colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.title} />
              <span>{el.title}</span>
            </div>
          ))}
        </Carousel>
      )}
      {document.documentElement.clientWidth <= 767 &&
        document.documentElement.clientWidth > 500 && (
        <Carousel itemsToScroll={1} itemsToShow={2}>
          {props.colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.title} />
              <span>{el.title}</span>
            </div>
          ))}
        </Carousel>
      )}
      {document.documentElement.clientWidth <= 500 && (
        <Carousel itemsToScroll={1} itemsToShow={1}>
          {props.colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.title} />
              <span>{el.title}</span>
            </div>
          ))}
        </Carousel>
      )}
      <button type="button" className="open-modal" onClick={props.openModal}>
        Заказать подбор цвета бесплатно
      </button>
      <span className="instagram-link">
        Больше работ в нашем{' '}
        <a target="_blank" href="https://www.instagram.com/bikolor/">
          Instagram
        </a>
      </span>
    </section>
  );
}

ColorsComponent.propTypes = {
  city: PropTypes.string,
};
