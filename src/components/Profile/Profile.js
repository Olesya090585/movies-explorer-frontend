import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import '../Profile/Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/constans';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Profile({ isLoggedIn, onSubmit, isErrorMessage, setIsErrorMessage, isSuccessMessage, setIsSuccessMessage, onClick }) {
  const [isEditProfile, setEditProfile] = useState(true);
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const datamatch = currentUser.name === values.name && currentUser.email === values.email;

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setEditProfile(false);
  }

  function handleChangeInput(e) {
    handleChange(e);
    setIsSuccessMessage('');
    setIsErrorMessage('');
  }

  function handleEditProfile() {
    setEditProfile((e) => !e);
  }

  useEffect(() => {
    setIsErrorMessage('');
    setIsSuccessMessage('');
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <form className="profile__form" name="form" onSubmit={handleSubmit} noValidate>
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={values.name || ''}
              pattern={NAME_REGEX}
              onChange={handleChangeInput}
              required
              minLength={2}
              maxLength={40}
              disabled={isEditProfile}
            />
          </label>
          <span className="profile__input-error">{errors.name}</span>
          <label className="profile__label profile__label_border-none">
            E-mail
            <input
              className="profile__input"
              type="email"
              name="email"
              placeholder="Ваш email"
              value={values.email || ''}
              pattern={EMAIL_REGEX}
              onChange={handleChangeInput}
              required
              minLength={2}
              maxLength={40}
              disabled={isEditProfile}
            />
          </label>
          <span className="profile__input-error">{errors.email}</span>
          {isEditProfile ? (
            <div className="profile__button-block">
              <button className="profile__button" type="submit" onClick={handleEditProfile}>
                Редактировать
              </button>
              <Link to="/" className="profile__button profile__button_active" onClick={onClick}>
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <div className="profile__button-wrapper">
              <span className="profile__form-error">{isErrorMessage}</span>
              <span className="profile__form-error">{isSuccessMessage}</span>
              <button className="profile__button-save" disabled={!isValid || datamatch} type="submit">
                Сохранить
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
export default Profile;
