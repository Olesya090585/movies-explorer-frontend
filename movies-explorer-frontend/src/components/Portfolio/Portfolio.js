import React from "react";
import "../Portfolio/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h7 className="portfolio__name">Портфолио</h7>
        <ul className="portfolio__list">
          <div className="portfolio__wrapper">
            <li className="portfolio__list-item">Статичный сайт</li>
            <button
              type="button"
              aria-label="статичный сайт"
              className="portfolio__button"
            ></button>
          </div>
          <div className="portfolio__wrapper">
            <li className="portfolio__list-item">Адаптивный сайт</li>
            <button
              type="button"
              aria-label="адаптивный сайт"
              className="portfolio__button"
            ></button>
          </div>
          <div className="portfolio__wrapper portfolio__wrapper_border">
            <li className="portfolio__list-item">Одностраничное приложение</li>
            <button
              type="button"
              aria-label="одностраничное приложение"
              className="portfolio__button"
            ></button>
          </div>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
