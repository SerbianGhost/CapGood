const ImportSection: React.FC = () => {
  return (
    <section className="import work-space__section">
      <header className="import__header work-space__section-header">
        <nav className="import__nav">
          <ul className="import__menu import__menu--header">
            <li className="import__menu-item">Медиаматериалы</li>
            <li className="import__menu-item">Звук</li>
            <li className="import__menu-item">Текст</li>
            <li className="import__menu-item">Стикеры</li>
            <li className="import__menu-item">Эффекты</li>
            <li className="import__menu-item">Переходы</li>
            <li className="import__menu-item">Субтитры</li>
            <li className="import__menu-item">Фильтры</li>
            <li className="import__menu-item">Корректировка</li>
          </ul>
        </nav>
      </header>
      <div className="import__blocks">
        <aside className="import__aside">
          <nav className="import__nav">
            <ul className="import__menu import__menu--aside">
              <li className="import__menu-item">Импортировать</li>
              <li className="import__menu-item">Библиотека</li>
            </ul>
          </nav>
        </aside>
        <div className="import__data work-space__section-data">1</div>
      </div>
    </section>
  );
};
export default ImportSection;
