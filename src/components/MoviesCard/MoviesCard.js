import React from "react";
import { useLocation } from "react-router-dom";
// import movie1 from "../../images/movie-1.png";
// import movie2 from "../../images/movie-2.png";
// import movie3 from "../../images/movie-3.png";
// import movie4 from "../../images/movie-4.png";
// import movie5 from "../../images/movie-5.png";
// import movie6 from "../../images/movie-6.png";
// import movie7 from "../../images/movie-7.png";
// import movie8 from "../../images/movie-8.png";
// import movie9 from "../../images/movie-9.png";
// import movie10 from "../../images/movie-10.png";
// import movie11 from "../../images/movie-11.png";
// import movie12 from "../../images/movie-12.png";
// import movie13 from "../../images/movie-13.png";
// import movie14 from "../../images/movie-14.png";
// import movie15 from "../../images/movie-15.png";
// import movie16 from "../../images/movie-16.png";

import "../MoviesCard/MoviesCard.css";

function MoviesCard({card}) {
  const location = useLocation();
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;
  const classButton = `movie__button ${
    location.pathname === "/saved-movies" ? "movie__button-delete" : ""
  }`;
  return (
    <>
      <li className="movie">
        <img className="movie__image" src={card.image} alt={card.nameRU}></img>
        <div className="movie__info">
          <h1 className="movie__name">{card.nameRU}</h1>
          <p className="movie__duration">{`${durationMovieHours}ч ${durationMovieMinuts}м`}</p>
          <button type="button" className={classButton} />
        </div>
      </li>
     </>
  );
}
export default MoviesCard;
