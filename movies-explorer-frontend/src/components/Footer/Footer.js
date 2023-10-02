import React from "react";
import "../Footer/Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <footer
      className={`footer ${
        location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile"
          ? ""
          : "footer__hidden"
      }`}
    >
      <div className="footer__container">
        <h7 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h7>
        <div className="footer__block">
          <p className="footer__copyright">&copy; 2023</p>
          <ul className="footer__list">
            <li className="footer__link">
              <button className="footer__link-button">Яндекс.Практикум</button>
            </li>
            <li className="footer__link">
              <button className="footer__link-button">Github</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
