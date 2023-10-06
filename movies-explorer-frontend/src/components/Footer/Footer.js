import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h6 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h6>
      <div className="footer__block">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__list">
          <li className="footer__link">
            <a
              href="https://practicum.yandex.ru"
              target="blank"
              className="footer__link-button"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://github.com"
              target="blank"
              className="footer__link-button"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
