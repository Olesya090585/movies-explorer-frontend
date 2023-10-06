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
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <div className="promo__illustration"></div>
        <a href="#techs" className="promo__link">
          Узнать больше
        </a>
      </div>
    </section>
  );
}
export default Promo;
