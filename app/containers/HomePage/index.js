/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { ContactsComponent } from '../../components/ContactsComponent';
import { TechnologyComponent } from '../../components/TechnologyComponent';
import { WhatYouGetComponent } from '../../components/WhatYouGetComponent';
import { BannerComponent } from '../../components/BannerComponent';
import { ServicesComponent } from '../../components/ServicesComponent';
import { ThreeLayersComponent } from '../../components/ThreeLayersComponent';
import {ProcessComponent} from "../../components/ProcessComponent";

const cities = {
  irk: {
    name: 'Иркутск',
    phone: '+7 (914) 945-26-77',
    address: 'ул Байкальская 261 А/1 Performance Car',
  },
  nov: {
    name: 'Новосибирск',
    phone: '+7 (383) 375-42-65',
    address: 'ул.Прокопьевская 3А/1 Dr.Tires колесная мастерская',
  },
  kra: {
    name: 'Красноярск',
    phone: '+7 (391) 256-77-65',
    address: 'ул. Башиловская 18, стр. 57',
  },
};

export default function HomePage() {
  const [city, setCity] = useState('kra');
  const handleChange = value => {
    setCity(value);
  };
  return (
    <>
      <HeaderComponent cities={cities} current={city} change={handleChange} />
      <BannerComponent />
      <ServicesComponent />
      <ThreeLayersComponent />
      <WhatYouGetComponent />
      <TechnologyComponent />
      <ProcessComponent />
      <ContactsComponent cities={cities} current={city} />
    </>
  );
}
