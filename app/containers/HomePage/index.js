/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { ContactsComponent } from '../../components/ContactsComponent';
import { TechnologyComponent } from '../../components/TechnologyComponent';
import { WhatYouGetComponent } from '../../components/WhatYouGetComponent';
import { BannerComponent } from '../../components/BannerComponent';
import { ServicesComponent } from '../../components/ServicesComponent';
import { ThreeLayersComponent } from '../../components/ThreeLayersComponent';
import { ProcessComponent } from '../../components/ProcessComponent';

import './index.scss';
import OrderCallComponent from '../../components/OrderCallComponent';
import { cities } from '../../consts/cities';
import ColorsComponent from '../../components/ColorsComponent';

export default function HomePage(props) {
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
      <BannerComponent />
      <ServicesComponent />
      <OrderCallComponent />
      <ThreeLayersComponent
        openModal={() =>
          props.setModalForm({
            show: true,
            name: '',
            phone: '',
            status: 'form',
          })
        }
      />
      <ColorsComponent
        city={props.city}
        openModal={() =>
          props.setModalForm({
            show: true,
            name: '',
            phone: '',
            status: 'form',
          })
        }
      />
      <WhatYouGetComponent />
      <TechnologyComponent
        openModal={() =>
          props.setModalForm({
            show: true,
            name: '',
            phone: '',
            status: 'form',
          })
        }
      />
      <ProcessComponent />
      <ContactsComponent
        cities={cities}
        current={props.city}
        change={props.handleChange}
      />
    </>
  );
}
