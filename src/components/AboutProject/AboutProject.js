import React from "react";
import "../AboutProject/AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <article className="about-project__description">
          <h3 className="about-project__description-title about-project__description-title_one">
            Дипломный проект включал 5 этапов
          </h3>
          <h3 className="about-project__description-title about-project__description-title_three">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text about-project__description-text_two">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="about-project__description-text about-project__description-text_four">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
        <div className="about-project__interval">
          <p className="about-project__interval-one">1 неделя</p>
          <p className="about-project__interval-two">4 недели</p>
          <p className="about-project__interval-text">Back-end</p>
          <p className="about-project__interval-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
