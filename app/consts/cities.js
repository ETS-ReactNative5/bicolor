import kraPrice from '../prices/price_kra.xlsx';
import novPrice from '../prices/price_nov.xlsx';
import irkPrice from '../prices/price_irk.xlsx';
export const cities = {
  kra: {
    name: 'Красноярск',
    phone: '+7 (391) 256-77-65',
    address: 'ул. Башиловская 18, стр. 57',
    position: [56.084285, 92.980384],
    price: kraPrice,
  },
  irk: {
    name: 'Иркутск',
    phone: '+7 (914) 945-26-77',
    address: 'ул Байкальская 261 А/1 Performance Car',
    position: [52.257615, 104.356352],
    price: irkPrice,
  },
  nov: {
    name: 'Новосибирск',
    phone: '+7 (383) 375-42-65',
    address: 'ул.Прокопьевская 3А/1 Dr.Tires колесная мастерская',
    position: [54.953192, 82.973643],
    price: novPrice,
  },
};
