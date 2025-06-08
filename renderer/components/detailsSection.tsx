const DetailsSection: React.FC = () => {
  return (
    <section className="details work-space__section">
      <header className="details__header work-space__section-header">
        <h2 className="details__title work-space__section-title">
          Подробности
        </h2>
      </header>
      <div className="details__data work-space__section-data">
        <table className="details__table">
          <tbody>
            <tr className="details__tr">
              <td className="details__td">Название</td>
              <td className="details__th">06068</td>
            </tr>
            <tr className="details__tr">
              <td className="details__td">Путь</td>
              <td className="details__th">путь до файла</td>
            </tr>
            <tr className="details__tr">
              <td className="details__td">Соотношение сторон</td>
              <td className="details__th">16:9</td>
            </tr>
            <tr className="details__tr">
              <td className="details__td">Разрешение</td>
              <td className="details__th">Адаптировано</td>
            </tr>
            <tr className="details__tr">
              <td className="details__td">Частота кадров</td>
              <td className="details__th">30.00к/с</td>
            </tr>
            <tr className="details__tr">
              <td className="details__td">Импортированные медиаматериалы</td>
              <td className="details__th">Оставить в исходном положении</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="details__footer">
        <button className="details__change-button">Изменить</button>
      </footer>
    </section>
  );
};

export default DetailsSection;
