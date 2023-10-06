import React from "react";
import "../AboutMe/AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h5 className="about-me__title">Студент</h5>
        <div className="about-me__content">
          <div className="about-me__content-foto"></div>
          <h6 className="about-me__content-name">Олеся</h6>
          <p className="about-me__content-job">Фронтенд-разработчик</p>
          <p className="about-me__content-description">
            Я живу в Москве, закончила АлтГТУ, факультет пищевых производств.
            Работаю более 10 лет в энергетической компании инженером по
            проектно-сметной работе. У меня есть муж и два сына. Я люблю читать
            книги, рисовать, слушать музыку. Недавно начала изучать
            веб-разработку, мечтаю сменить профессию.
          </p>
          <a href="https://github.com/Olesya090585" target="blank" className="about-me__content-github">Github</a>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
