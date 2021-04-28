import React from 'react';
import Carousel from 'react-elastic-carousel';
import xlsx from 'xlsx';
import PropTypes from 'prop-types';
import { colors } from './consts';
import './index.scss';
import { cities } from '../../consts/cities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ColorsComponent(props) {
  const handlePriceDownload = () => {
    xlsx.writeFile(cities[props.city].price, `${props.city}_price.xlsx`);
  };
  return (
    <section className="colors">
      <span className="section-title">Цветовые решения</span>
      {document.documentElement.clientWidth > 767 && (
        <Carousel itemsToScroll={3} itemsToShow={3}>
          {colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.name} />
              <span>{el.name}</span>
            </div>
          ))}
        </Carousel>
      )}
      {document.documentElement.clientWidth <= 767 &&
        document.documentElement.clientWidth > 500 && (
        <Carousel itemsToScroll={1} itemsToShow={2}>
          {colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.name} />
              <span>{el.name}</span>
            </div>
          ))}
        </Carousel>
      )}
      {document.documentElement.clientWidth <= 500 && (
        <Carousel itemsToScroll={1} itemsToShow={1}>
          {colors.map(el => (
            <div className="color" key={el.id}>
              <img src={el.image} alt={el.name} />
              <span>{el.name}</span>
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
      <button
        onClick={handlePriceDownload}
        type="button"
        className="price-button"
      >
        <em>
          <FontAwesomeIcon icon={['far', 'file-excel']} />
        </em>
        <strong>Прайс скачать</strong>
      </button>
    </section>
  );
}

ColorsComponent.propTypes = {
  city: PropTypes.string,
};
