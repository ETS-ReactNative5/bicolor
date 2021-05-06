import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import Slider from '@material-ui/core/Slider';
import './index.scss';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export const CalculatorComponent = props => {
  const [info, setInfo] = useState({});
  const [params, setParams] = useState({
    size: 13,
    amount: 'four',
    colors: 'solo',
  });
  const [row, setRow] = useState({});
  const [price, setPrice] = useState('');

  useEffect(() => {
    Tabletop.init({
      key: '1ViLxN9d0n7yZyVkkUrFBLjP36ceRaiboT9YHsp5K24g',
      simpleSheet: false,
      callback: googleData => {
        setInfo(googleData);
      },
    });
  }, []);

  useEffect(() => {
    if (!info[props.city]) return;
    if (!info[props.city].elements) return;
    setRow(
      info[props.city].elements.find(
        el => parseInt(el.size, 10) === params.size,
      ),
    );
  }, [params.size, info, props.city]);

  useEffect(() => {
    const field = `${params.amount}_${params.colors}`;
    setPrice(row[field]);
  }, [params.amount, params.colors, row]);
  return (
    <section className="calculator">
      <span className="section-title">Калькулятор стоимости</span>
      <div className="calculator_content">
        <span className="form-title">
          Размер диска: <em>{params.size}''</em>
        </span>
        <Slider
          value={params.size}
          min={13}
          max={24}
          step={1}
          valueLabelDisplay="auto"
          onChange={(ev, value) => setParams({ ...params, size: value })}
        />
        <span className="form-title">Количество дисков</span>
        <RadioGroup
          aria-label="amount"
          name="amount"
          value={params.amount}
          row
          onChange={(ev, value) => setParams({ ...params, amount: value })}
        >
          <FormControlLabel value="one" control={<Radio />} label="1 шт." />
          <FormControlLabel value="two" control={<Radio />} label="2 шт." />
          <FormControlLabel value="three" control={<Radio />} label="3 шт." />
          <FormControlLabel value="four" control={<Radio />} label="4 шт." />
        </RadioGroup>
        <span className="form-title">Покраска</span>
        <RadioGroup
          aria-label="colors"
          name="colors"
          value={params.colors}
          row
          onChange={(ev, value) => setParams({ ...params, colors: value })}
        >
          <FormControlLabel
            value="solo"
            control={<Radio />}
            label="Один цвет"
          />
          <FormControlLabel
            value="double"
            control={<Radio />}
            label="Два цвета"
          />
        </RadioGroup>
        <div className="calculator_content__summary">
          <div className="price">
            <span className="text">Итоговая стоимость</span>
            <span className="value">{price} &#8381;</span>
          </div>
          <button
            className="order-button"
            type="submit"
            onClick={props.openModal}
          >
            Записаться на покраску
          </button>
        </div>
      </div>
    </section>
  );
};
