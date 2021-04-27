import React, { useEffect, useState } from 'react';
import { items } from './consts';
import './index.scss';
import arrow from '../../images/arrow.svg';

export function BannerComponent() {
  const [current, setCurrent] = useState(1);
  const [interval, setIntervalId] = useState(0);
  const handleChange = number => {
    clearInterval(interval);
    setCurrent(number + 1);
  };

  useEffect(function() {
    const id = setInterval(timer, 3000);
    setIntervalId(id);
  }, []);

  const timer = () => {
    const currentId = current;
    setCurrent(currentId + 1);
  };

  const changeCurrent = delta => {
    clearInterval(interval);
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
        {items.map(function(el) {
          return (
            <section
              className="carousel_item"
              style={{
                background: `url(${el.img}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                {items.map(function(elem, index) {
                  return (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <span
                      key={elem.id}
                      className={`dot ${index + 1 === current ? 'active' : ''}`}
                      onClick={() => handleChange(index)}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
