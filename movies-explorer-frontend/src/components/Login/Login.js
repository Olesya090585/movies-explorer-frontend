import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "../Login/Login.css";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
      <Link to="/" className="login__logo-container">
        <img
          className="login__logo"
          src={logo}
          alt="белая заглавная буква С в светло-зеленом кругу"
        />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" name="form">
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            type="email"
            name="email"
            placeholder="Ваш email"
            // value=""
            required
            minLength={2}
            maxLength={40}
          />
          <span className="login__input-error login__input-error_type_email" />
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Введите пароль"
            // value=""
            required
            minLength={2}
            maxLength={40}
          />
          <span className="login__input-error login__input-error_type_password" />
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <div className="login__signin">
          <p>Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__register-link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Login;
