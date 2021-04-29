/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import emailjs from 'emailjs-com';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import PravkaPage from '../PravkaPage';
import PokraskaPage from '../PokraskaPage';
import GlobalStyle from '../../global-styles';

export default function App() {
  const [city, setCity] = useState('kra');
  const [modalForm, setModalForm] = useState({
    show: false,
    name: '',
    phone: '',
    status: 'form',
  });
  const handleChange = value => {
    setCity(value);
  };
  const handleFormChange = ev => {
    setModalForm({
      ...modalForm,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleFormSubmit = ev => {
    ev.preventDefault();
    const template = {
      name: modalForm.name,
      phone: modalForm.phone,
    };
    emailjs
      .send('service_u9nh2d6', 'gmail', template, 'user_WMeCZN1QgdHpppLtqZcZr')
      .then(() => {
        setModalForm({
          show: true,
          name: '',
          phone: '',
          status: 'sent',
        });
      });
  };
  return (
    <div>
      <Dialog
        open={modalForm.show}
        onClose={() =>
          setModalForm({ show: false, name: '', phone: '', status: 'form' })
        }
        classes={{
          paper: 'order-call-modal',
        }}
      >
        <FontAwesomeIcon
          icon={['fas', 'times']}
          onClick={() => setModalForm({ show: false, name: '', phone: '' })}
        />
        {modalForm.status === 'form' && (
          <form onSubmit={handleFormSubmit}>
            <h3>Закажите звонок менеджера</h3>
            <TextField
              value={modalForm.name}
              label="Имя"
              placeholder="Введите имя"
              id="name"
              onChange={handleFormChange}
              required
            />
            <TextField
              value={modalForm.phone}
              label="Телефон"
              placeholder="Пример: 8 999 999 9999"
              id="phone"
              onChange={handleFormChange}
              required
            />
            <Button type="submit" variant="contained">
              Заказать звонок
            </Button>
          </form>
        )}
        {modalForm.status === 'sent' && (
          <div className="success">
            Спасибо! Ваша заявка на подбор цвета отправлена. Вам перезвонит наш
            менеджер в течение дня.
          </div>
        )}
      </Dialog>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage
              {...props}
              city={city}
              handleChange={handleChange}
              setModalForm={setModalForm}
            />
          )}
        />
        <Route
          exact
          path="/pokraska"
          render={props => (
            <PokraskaPage
              {...props}
              city={city}
              handleChange={handleChange}
              setModalForm={setModalForm}
            />
          )}
        />
        <Route
          exact
          path="/pravka"
          render={props => (
            <PravkaPage
              {...props}
              city={city}
              handleChange={handleChange}
              setModalForm={setModalForm}
            />
          )}
        />
        <Route
          render={props => (
            <NotFoundPage
              {...props}
              city={city}
              handleChange={handleChange}
              setModalForm={setModalForm}
            />
          )}
        />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
