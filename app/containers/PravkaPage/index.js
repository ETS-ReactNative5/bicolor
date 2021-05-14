import React, { useEffect } from 'react';
import '../HomePage/index.scss';
import '../PokraskaPage/index.scss';
import { HeaderComponent } from '../../components/HeaderComponent';
import { ContactsComponent } from '../../components/ContactsComponent';
import OrderCallComponent from '../../components/OrderCallComponent';
import image from '../../images/pravka1.jpg';
import { cities } from '../../consts/cities';

export default function PravkaPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div className="page-container">
        <section className="page-head">
          <div className="page-head_content">
            <h3>Восстановление геометрии дисков</h3>
            <p>Мы исправим практически любые дефекты</p>
          </div>
        </section>
        <section className="page-content">
          <h3>Почему нельзя экономить на правке дисков</h3>
          <p>
            Автомастерские низкого уровня в основном используют
            непрофессиональные технические приспособления, что влечет неполное
            или неточное восстановление геометрии колёсного диска. В свою
            очередь, это приводит к поломкам подвески авто. Чтобы не платить
            дважды и сберечь самый ценный ресурс – время, стоит обращаться
            только к профессионалам, работающим на высокоточном оборудовании. То
            есть к нам!
          </p>
          <h4>Вы заново полюбите езду</h4>
          <p>Что изменится после правки дисков?</p>
          <ul>
            <li>Улучшится сцепление с дорогой.</li>
            <li>Пропадёт биение руля.</li>
            <li>Исчезнут посторонние шумы.</li>
            <li>
              Увеличится скорость разгона и уменьшится тормозной путь машины.
            </li>
          </ul>
          <h4>
            <img src={image} alt="how we work" className="image" />
            Мы работаем с коваными, стальными и литыми дисками
          </h4>
          <p>
            Наши специалисты проведут диагностику дефекта диска и предложат
            варианты решения проблемы. Вы узнаете полную стоимость ремонта до
            начала работ.
          </p>
          <p>
            Хотим отметить, что самостоятельно восстановить диски практически
            невозможно. Покупка новых колёсных дисков – сложное и затратное
            дело, поэтому ремонт от BIKOLOR – оптимальный выход из ситуации.
          </p>
          <p>
            Мы работаем на современном оборудовании, даём гарантии и бережно
            относимся к вашему времени. Обращаясь в BIKOLOR, вы получаете
            обновлённые колёса в кратчайшие сроки.
          </p>
          <p>
            Действует система доставки: сотрудник может забрать диски для правки
            и доставить их обратно по указанному адресу.{' '}
          </p>
        </section>
        <div style={{ background: '#da3611', marginBottom: '-50px' }}>
          <OrderCallComponent />
        </div>
        <ContactsComponent cities={cities} current={props.city} />
      </div>
    </>
  );
}
