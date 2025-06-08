import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function WorkSpace() {
  return (
    <>
      <main className="work-space">
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
        <section className="player work-space__section">
          <header className="player__header work-space__section-header">
            <h2 className="player__title work-space__section-title">Плеер</h2>
          </header>
          <div className="player__data work-space__section-data">
            <div className="player__video"></div>
          </div>
          <footer className="player__footer">
            <div className="player__footer-start player__footer-part">
              <div className="player__time">
                <p className="player__current-time">
                  <span className="player__hour">00</span>:
                  <span className="player__minute">00</span>:
                  <span className="player__second">00</span>:
                  <span className="player__millisecond">00</span>
                </p>{" "}
                /{" "}
                <p className="player__duration">
                  <span className="player__hour">00</span>:
                  <span className="player__minute">00</span>:
                  <span className="player__second">00</span>:
                  <span className="player__millisecond">00</span>
                </p>
              </div>
              <button type="button" className="player__volume-indicator-button">
                <span className="player__volume-indicator">Громкость</span>
              </button>
            </div>
            <div className="player__footer-center player__footer-part">
              <button type="button" className="player__play-button">
                <svg
                  viewBox="-3 0 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>play</title> <desc>Created with Sketch Beta.</desc>{" "}
                    <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Icon-Set-Filled"
                        transform="translate(-419.000000, -571.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <path
                          d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                          id="play"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </div>
            <div className="player__footer-end player__footer-part">
              <button type="button" className="player__quality-button">
                Полное
              </button>
              <button className="player__scale-button">Масштаб</button>
              <button className="player__unwrap-button">На весь экран</button>
            </div>
          </footer>
        </section>
        <section className="details work-space__section">
          <header className="details__header work-space__section-header">
            <h2 className="details__title work-space__section-title">
              Подробности
            </h2>
          </header>
          <div className="details__data work-space__section-data">
            <table className="details__table">
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
                <td className="details__td">Тмпортированные медиаматериалы</td>
                <td className="details__th">Оставить в исходном положении</td>
              </tr>
            </table>
          </div>
          <footer className="details__footer">
            <button className="details__change-button">Изменить</button>
          </footer>
        </section>
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
      </main>
    </>
  );
}
