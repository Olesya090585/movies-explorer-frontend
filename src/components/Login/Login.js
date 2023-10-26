import React, { useEffect } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import { EMAIL_REGEX } from '../../utils/constans';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login({ onSubmit, isErrorMessage, setIsErrorMessage }) {
  const { values, handleChange, errors, isValid} = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  function handleChangeInput(e) {
    handleChange(e);
    setIsErrorMessage('');
  }
  useEffect(() => {
    setIsErrorMessage('');
  }, [setIsErrorMessage]);

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo-container">
          <img className="login__logo" src={logo} alt="белая заглавная буква С в светло-зеленом кругу" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" name="form" onSubmit={handleSubmit} noValidate>
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            type="email"
            name="email"
            placeholder="Ваш email"
            value={values.email || ''}
            onChange={handleChangeInput}
            pattern={EMAIL_REGEX}
            required
            minLength={6}
            maxLength={40}
          />
          <span className="login__input-error">{errors.email}</span>
          <label className="login__label">Пароль</label>
          <input
            className={`login__input ${errors.password ? 'login__input_red' : ''}`}
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={values.password || ''}
            onChange={handleChangeInput}
            required
            minLength={8}
            maxLength={40}
          />
          <span className="login__input-error">{errors.password}</span>
          <div className="login__block-button">
            <span className="login__form-error">{isErrorMessage}</span>
            <button type="submit" className={`login__button ${!isValid ? 'login__button-disable' : ''}`}>
              Войти
            </button>
          </div>
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
