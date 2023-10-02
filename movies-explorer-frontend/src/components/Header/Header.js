import React from "react";
import logo from "../../images/logo.svg";
import "../Header/Header.css";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

function Header({ isLogin, handleIsLogin }) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname !== "/" ? "header_black" : ""
      } && ${
        location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile"
          ? ""
          : "header__hidden"
      }`}
    >
      <div className="header__container">
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="белая заглавная буква С в светло-зеленом кругу"
          />
        </Link>
        {!isLogin ? (
          <ul className="header__menu">
            <Link
              to="/signup"
              type="button"
              aria-label="регистрация"
              className="header__button"
            >
              Регистрация
            </Link>
            <Link
              to="/signin"
              onClick={handleIsLogin}
              type="button"
              aria-label="войти"
              className="header__button"
            >
              Войти
            </Link>
          </ul>
        ) : (
          <>
            <Navigation />
            <BurgerMenu />
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
