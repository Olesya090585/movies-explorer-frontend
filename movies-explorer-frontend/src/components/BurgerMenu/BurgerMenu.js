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
        className={`burger-menu-button ${
          isMenuOpen ? "burger-menu-button_invisible" : ""
        }`}
        onClick={handleMenuClick}
      ></button>
      <div
        className={`burger-menu-container ${
          isMenuOpen ? "burger-menu-container_active" : ""
        }`}
        onClick={handleMenuClick}
      >
        <button
          className="burger-menu-button-close"
          onClick={handleMenuClick}
        />
        <div
          className={`burger-menu-content ${
            isMenuOpen ? "burger-menu-content_active" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="burger-menu-list">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `burger-menu-item ${
                  isActive ? "burger-menu-item_active" : ""
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `burger-menu-item ${
                  isActive ? "burger-menu-item_active" : ""
                }`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `burger-menu-item ${
                  isActive ? "burger-menu-item_active" : ""
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink
            to="/profile"
            className="burger-menu-profile"
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
