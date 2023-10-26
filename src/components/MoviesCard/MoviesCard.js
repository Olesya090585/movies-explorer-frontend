import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../MoviesCard/MoviesCard.css";

function MoviesCard({
  card,
  handleSaveMovie,
  onDelete,
  saveMovieId,
  isSaveMovies,
}) {
  const [isSaved, setIsSaved] = useState(saveMovieId(card.id));
  const location = useLocation();
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;
  const classButton = `movie__button ${isSaved ? "movie__button_active" : ""} ${
    location.pathname === "/saved-movies" ? "movie__button-delete" : ""
  }`;
  const path = location.pathname === "/saved-movies";

  function handleSaveClick() {
    if (path) {
      onDelete(card);
    } else {
      if (isSaved) {
        onDelete(isSaveMovies.filter((c) => c.movieId === card.id)[0]);
        setIsSaved(!isSaved);
      } else {
        handleSaveMovie(card);
        setIsSaved(!isSaved);
      }
    }
  }

  return (
    <>
      <li className="movie">
        <img
          className="movie__image"
          src={
            card.image.url
              ? `https://api.nomoreparties.co${card.image.url}`
              : card.image
          }
          alt={card.nameRU}
        ></img>
        <div className="movie__info">
          <h1 className="movie__name">{card.nameRU}</h1>
          <p className="movie__duration">{`${durationMovieHours}ч ${durationMovieMinuts}м`}</p>
          <button
            type="button"
            className={classButton}
            onClick={handleSaveClick}
          />
        </div>
      </li>
    </>
  );
}
export default MoviesCard;
