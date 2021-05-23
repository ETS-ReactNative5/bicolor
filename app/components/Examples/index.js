import React from 'react';
import Carousel from 'react-elastic-carousel';
import './index.scss';

export const ExamplesComponent = props => {
  if (!props.examples) return '';
  return (
    <section className="examples">
      <span className="section-title">Примеры работ</span>
      <Carousel itemsToScroll={1} itemsToShow={1} pagination={false}>
        {props.examples.map(el => (
          <div className="example" key={el.id}>
            <span>{el.title}</span>
            <img src={el.image} alt={el.title} />
          </div>
        ))}
      </Carousel>
      <a target="_blank" href="https://www.instagram.com/bikolor/">
        Больше работ в нашем Instagram
      </a>
    </section>
  );
};
