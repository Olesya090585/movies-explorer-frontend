import React from "react";
import "../Portfolio/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h6 className="portfolio__name">Портфолио</h6>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="https://github.com/Olesya090585/how-to-learn" target="blank" className="portfolio__link">Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/Olesya090585/russian-travel" target="blank" className="portfolio__link">Адаптивный сайт</a>
          </li>
          <li className="portfolio__item portfolio__item_border">
            <a href="https://github.com/Olesya090585/react-mesto-api-full-gha" target="blank" className="portfolio__link">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
