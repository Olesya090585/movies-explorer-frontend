import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../MoviesCard/MoviesCard.css";

function MoviesCard({ card, handleSaveMovie, saveMovieId }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;
  const classButton = `movie__button ${
    location.pathname === "/saved-movies" ? "movie__button-delete" : ""
  } ${isSaved ? "movies__button_active" : ""}`;
  console.log(isSaved);
  // const path = location.pathname === "/saved-movies";
  // const id = !path ? card.id : card.movieId;
  // const saveMovie = saveMovieId(id);

  function handleSaveClick() {
    // if (saveMovie) {
    //   // onDelete(id);
    // } else {
      handleSaveMovie(card);
      // console.log(card);
      setIsSaved(!isSaved);
    // }
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
