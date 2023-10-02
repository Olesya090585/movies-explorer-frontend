import React from "react";
import "../Promo/Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета&nbsp;
          <br />
          Веб&#8209;разработки.
        </h1>
        <p class="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <div class="promo__illustration"></div>
        <button type="button" aria-label="узнать больше" class="promo__link">
          Узнать больше
        </button>
      </div>
    </section>
  );
}
export default Promo;
