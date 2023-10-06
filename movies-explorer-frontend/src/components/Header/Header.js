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
          <div className="header__menu">
            <Link
              to="/signup"
              className="header__button"
            >
              Регистрация
            </Link>
            <Link
              to="/signin"
              onClick={handleIsLogin}
              className="header__button header__button_green"
            >
              Войти
            </Link>
          </div>
        //для проверки бургер-меню
        //   <div className="header__menu">
        //   <div
        //     // to="/signup"
        //     className="header__button"
        //   >
        //     Регистрация
        //   </div>
        //   <div
        //     // to="/signin"
        //     onClick={handleIsLogin}
        //     className="header__button header__button_green"
        //   >
        //     Войти
        //   </div>
        // </div>
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
