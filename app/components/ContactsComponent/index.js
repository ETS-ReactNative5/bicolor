import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import PropTypes from 'prop-types';

export function ContactsComponent(props) {
  return (
    <section className="contacts">
      <span className="section-title">Контактная информация</span>
      <div className="contacts_content">
        <div className="contacts_content_contacts">
          <div className="item location">
            <span className="icon">
              <FontAwesomeIcon icon="map-marker-alt" />
            </span>
            <div className="values">
              <span>
                г. {props.cities[props.current].name},{' '}
                {props.cities[props.current].address}
              </span>
            </div>
          </div>
          <div className="item phone">
            <span className="icon">
              <FontAwesomeIcon icon="mobile-alt" />
            </span>
            <div className="values">
              <span>
                <a href={`tel:${props.cities[props.current].phone}`}>
                  {props.cities[props.current].phone}
                </a>
              </span>
            </div>
          </div>
          <div className="item email">
            <span className="icon">
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </span>
            <a href="mailto:bikolor24@gmail.com">bikolor24@gmail.com</a>
          </div>
        </div>
        <div className="contacts_content_map">Здесь будет карта</div>
      </div>
    </section>
  );
}

ContactsComponent.propTypes = {
  cities: PropTypes.object,
  current: PropTypes.string,
};
