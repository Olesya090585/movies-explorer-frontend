import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constans";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register({ onSubmit, isErrorMessage }) {
  const { values, handleChange, errors, setErrors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

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
        <form
          className="register__form"
          name="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={values.name || ""}
            onChange={handleChange}
            pattern={NAME_REGEX}
            required
            minLength={6}
            maxLength={40}
          />
          <span className="register__input-error">{errors.name}</span>
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            type="email"
            name="email"
            placeholder="Ваш email"
            value={values.email || ""}
            onChange={handleChange}
            pattern={EMAIL_REGEX}
            required
            minLength={6}
            maxLength={40}
          />
          <span className="register__input-error">{errors.email}</span>
          <label className="register__label">Пароль</label>
          <input
            className={`register__input ${
              errors.password ? "register__input_red" : ""
            }`}
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={values.password || ""}
            onChange={handleChange}
            required
            minLength={8}
            maxLength={40}
          />
          <span className="register__input-error">{errors.password}</span>
          <div className="register__block-button">
            <span className="register__form-error">{isErrorMessage}</span>
            <button
              type="submit"
              className={`register__button ${
                !isValid ? "register__button-disable" : ""
              }`}
            >
              Зарегистрироваться
            </button>
          </div>
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
