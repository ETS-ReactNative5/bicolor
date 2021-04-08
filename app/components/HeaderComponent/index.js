import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import logo from '../../images/logo.png';
import './index.scss';
import marker from '../../images/marker.png';

export function HeaderComponent(props) {
  return (
    <section className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header_logo" />
      </Link>
      <div className="header_links">
        <Link to="/pokraska">
          <img src={marker} alt="marker" />
          Покраска
        </Link>
        <Link to="/pravka">
          <img src={marker} alt="marker" />
          Правка
        </Link>
      </div>
      <div className="header_city">
        <span>Ваш город:</span>
        <Select
          value={props.current}
          onChange={ev => props.change(ev.target.value)}
        >
          {Object.keys(props.cities).map(function(el) {
            return (
              <MenuItem key={el} value={el}>
                {props.cities[el].name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className="header_contacts">
        <span className="header_contacts_item">
          {props.cities[props.current].name}{' '}
          <a href={`tel:${props.cities[props.current].phone}`}>
            {props.cities[props.current].phone}
          </a>
        </span>
        <span className="header_contacts_call">Заказать звонок</span>
      </div>
    </section>
  );
}

HeaderComponent.propTypes = {
  cities: PropTypes.object,
  current: PropTypes.string,
  change: PropTypes.func,
};
