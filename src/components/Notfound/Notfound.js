import React from "react";
import { useNavigate } from "react-router-dom";
import "../Notfound/Notfound.css";

function Notfound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <section className="notfound">
      <div className="notfound__container">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
        <button
          onClick={goBack}
          type="button"
          aria-label="назад"
          className="notfound__link"
        >
          Назад
        </button>
      </div>
    </section>
  );
}
export default Notfound;
