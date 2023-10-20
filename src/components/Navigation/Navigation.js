import React from "react";
import "../Navigation/Navigation.css";
import icon from "../../images/icon_profile.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navigation() {
  const location = useLocation();
  return (
    <div className="navigation">
      <nav className="navigation__container">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
        >
          Сохраненные фильмы
        </NavLink>
      </nav>
      <div className="navigation__profile">
        <Link to="/profile" className="navigation__profile-block">
          Аккаунт
          <img
            className={`navigation__profile-icon ${
              location.pathname !== "/" ? "navigation__profile-icon_dark" : ""
            }`}
            src={icon}
            alt="иконка человека"
          />
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
