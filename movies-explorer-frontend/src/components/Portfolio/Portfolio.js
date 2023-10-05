import React from "react";
import "../Portfolio/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h6 className="portfolio__name">Портфолио</h6>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com/Olesya090585/how-to-learn"
              target="blank"
              className="portfolio__link"
            >
              <p className="portfolio__item-text">Статичный сайт</p>
              <div
                className="portfolio__item-img"
              ></div>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/Olesya090585/russian-travel"
              target="blank"
              className="portfolio__link"
            >
               <p className="portfolio__item-text">Адаптивный сайт</p>
               <div
                className="portfolio__item-img"
              ></div>
            </a>
          </li>
          <li className="portfolio__item portfolio__item_border">
            <a
              href="https://github.com/Olesya090585/react-mesto-api-full-gha"
              target="blank"
              className="portfolio__link"
            >
              <p className="portfolio__item-text">Одностраничное приложение</p>
              <div
                className="portfolio__item-img"
              ></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
