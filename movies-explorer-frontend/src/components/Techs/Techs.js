import React from "react";
import "../Techs/Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h3 className="techs__title">Технологии</h3>
        <div className="techs__content">
          <h4 className="techs__heading">7 технологий</h4>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__tools">
            <li className="techs__tools-name">HTML</li>
            <li className="techs__tools-name">CSS</li>
            <li className="techs__tools-name">JS</li>
            <li className="techs__tools-name">React</li>
            <li className="techs__tools-name">Git</li>
            <li className="techs__tools-name">Express.js</li>
            <li className="techs__tools-name">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Techs;
