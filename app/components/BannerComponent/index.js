import React, { useEffect, useState } from 'react';
import { items } from './consts';
import './index.scss';
import arrow from '../../images/arrow.svg';

export function BannerComponent() {
  const [timeoutId, setTimoutId] = useState(null);
  const [current, setCurrent] = useState(1);
  const handleChange = number => {
    setCurrent(number + 1);
  };

  useEffect(
    function() {
      clearTimeout(timeoutId);
      const id = setTimeout(() => setCurrent((current + 1) % 3 || 3), 10000);
      setTimoutId(id);
    },
    [current],
  );

  const changeCurrent = delta => {
    setCurrent((current + delta) % 3 || 3);
  };
  return (
    <section className="banner">
      <div
        className="carousel"
        style={{
          transform: `translateX(${-100 * (current - 1)}%)`,
        }}
      >
        {items.map(el => (
          <section
            className="carousel_item"
            style={{
              background: `url(${el.img}) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'left bottom',
            }}
            key={el.id}
          >
            <span className="title">{el.title}</span>
            <span className="text">{el.text}</span>
            <span
              className="arrow left"
              onClick={() => changeCurrent(-1)}
              style={{
                left: `${100 * (current - 1)}%`,
              }}
            >
              <img src={arrow} alt="previous" />
            </span>
            <span
              className="arrow right"
              onClick={() => changeCurrent(1)}
              style={{
                right: `${-100 * (current - 1)}%`,
              }}
            >
              <img src={arrow} alt="previous" />
            </span>
            <div className="pagination">
              {items.map((elem, index) => (
                <span
                  key={elem.id}
                  className={`dot ${index + 1 === current ? 'active' : ''}`}
                  onClick={() => handleChange(index)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
