import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../BurgerMenu/BurgerMenu.css";
function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <button
        className={`burger-menu__button ${
          isMenuOpen ? "burger-menu__button_invisible" : ""
        }`}
        onClick={handleMenuClick}
      ></button>
      <div
        className={`burger-menu__container ${
          isMenuOpen ? "burger-menu__container_active" : ""
        }`}
        onClick={handleMenuClick}
      >
        <button
          className="burger-menu__button-close"
          onClick={handleMenuClick}
        />
        <div
          className={`burger-menu__content ${
            isMenuOpen ? "burger-menu__content_active" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="burger-menu__list">
            <NavLink
              to="/"
              // target="_blank"
              className={({ isActive }) =>
                `burger-menu__item ${
                  isActive ? "burger-menu__item_active" : ""
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              // target="_blank"
              className={({ isActive }) =>
                `burger-menu__item ${
                  isActive ? "burger-menu__item_active" : ""
                }`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              // target="_blank"
              className={({ isActive }) =>
                `burger-menu__item ${
                  isActive ? "burger-menu__item_active" : ""
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink
            to="/profile"
            target="_blank"
            className="burger-menu__profile"
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
