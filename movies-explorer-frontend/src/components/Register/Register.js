import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "../Register/Register.css";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__logo-container">
      <img
          className="register__logo"
          src={logo}
          alt="белая заглавная буква С в светло-зеленом кругу"
        />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" name="form">
          <label className="register__label">
            Имя</label>
            <input
              className="register__input"
              type="text"
              name="name"
              placeholder="Ваше имя"
              // value=""
              required
              minLength={2}
              maxLength={40}
            />
            <span className="register__input-error register__input-error_type_name" />
          <label className="register__label">
            E-mail</label>
            <input
              className="register__input"
              type="email"
              name="email"
              placeholder="Ваш email"
              // value=""
              required
              minLength={2}
              maxLength={40}
            />
            <span className="register__input-error register__input-error_type_email" />
          <label className="register__label">
            Пароль</label>
            <input
              className="register__input"
              type="password"
              name="password"
              placeholder="Введите пароль"
              // value=""
              required
              minLength={2}
              maxLength={40}
            />
            <span className="register__input-error register__input-error_type_password" />
            <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        </form>
        <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-link">
          Войти
        </Link>
      </div>
      </div>
    </section>
  );
}
export default Register;