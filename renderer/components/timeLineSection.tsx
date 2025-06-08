const TimeLineSection: React.FC = () => {
  return (
    <section className="timeline work-space__section">
      <header className="timeline__header work-space__section-header">
        <ul className="timeline__managment">
          <li className="timeline__item">Выбрать или разделить</li>
          <li className="timeline__item">Отмена</li>
          <li className="timeline__item">Сброс</li>
          <li className="timeline__item">Разделение</li>
          <li className="timeline__item">Удалить контент слева</li>
          <li className="timeline__item">Удалить контент справа</li>
          <li className="timeline__item">Удалить</li>
          <li className="timeline__item">Добавить маркер</li>
        </ul>
        <ul className="timeline__managment">
          <li className="timeline__item">Озвучка</li>
          <li className="timeline__item">
            Отключить магнит на основной дорожке
          </li>
          <li className="timeline__item">
            Отключить автоматическое склеивание
          </li>
          <li className="timeline__item">Отключить привязку</li>
          <li className="timeline__item">Включить ось предосмотра</li>
          <li className="timeline__item">Масштабировать под шкалу</li>
          <li className="timeline__item">Отдалить/Приблизить</li>
        </ul>
      </header>
      <div className="timeline__blocks">
        <aside className="timlene__aside"></aside>
        <div className="timeline__timeline"></div>
      </div>
    </section>
  );
};
export default TimeLineSection;
