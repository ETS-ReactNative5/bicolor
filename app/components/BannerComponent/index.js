import React, { useEffect, useState } from 'react';
import { items } from './consts';
import './index.scss';

export function BannerComponent() {
  const [current, setCurrent] = useState(1);
  const [interval, setIntervalId] = useState(null);
  const handleChange = number => {
    clearInterval(interval);
    setCurrent(number + 1);
  };

  useEffect(function() {
    const id = setInterval(timer, 10000);
    setIntervalId(id);
  }, []);

  const timer = () => {
    const currentId = current;
    setCurrent(currentId + 1);
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
