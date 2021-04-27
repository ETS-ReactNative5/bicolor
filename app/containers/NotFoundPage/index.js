/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { cities } from '../../consts/cities';
import { ContactsComponent } from '../../components/ContactsComponent';
import { NotFoundComponent } from '../../components/NotFoundComponent';

export default function NotFound(props) {
  return (
    <>
      <HeaderComponent
        cities={cities}
        current={props.city}
        change={props.handleChange}
        openModal={() =>
          props.setModalForm({
            show: true,
            name: '',
            phone: '',
            status: 'form',
          })
        }
      />
      <NotFoundComponent />
      <ContactsComponent cities={cities} current={props.city} />
    </>
  );
}
