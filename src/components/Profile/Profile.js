import React from "react";
import Header from '../Header/Header';
import "../Profile/Profile.css";

function Profile({ handleIsLogin, isLogin }) {
  return (
    <>
    <Header handleIsLogin={handleIsLogin} isLogin={isLogin}/>
    <section className="profile">
        <h1 className="profile__title">Привет, Олеся!</h1>
        <form className="profile__form" name="form">
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              type="text"
              name="name"
              placeholder="Ваше имя"
              value="Олеся"
              required
              minLength={2}
              maxLength={40}
            />
          </label>
          <label className="profile__label profile__label_border-none">
            E-mail
            <input
              className="profile__input"
              type="email"
              name="email"
              placeholder="Ваш email"
              value="email@ya.ru"
              required
              minLength={2}
              maxLength={40}
            />
          </label>
          <div className="profile__button-block">
            <button className="profile__button" type="submit">
              Редактировать
            </button>
            <button
              className="profile__button profile__button_active"
              type="submit"
            >
              Выйти из аккаунта
            </button>
          </div>
          {/* <div className="profile__button-block-save">
            <button className="profile__button-save" type="submit">
              Сохранить
            </button>
          </div> */}
        </form>
    </section>
    </>
  );
}
export default Profile;
