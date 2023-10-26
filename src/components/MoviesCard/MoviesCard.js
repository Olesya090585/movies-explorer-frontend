import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';

function MoviesCard({ card, handleSaveMovie, onDelete, saveMovieId }) {
  const [isSaved, setIsSaved] = useState(saveMovieId(card.id));
  const location = useLocation();
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;
  const classButton = `movie__button ${isSaved ? 'movie__button_active' : ''} ${
    location.pathname === '/saved-movies' ? 'movie__button-delete' : ''
  }`;
  const path = location.pathname === '/saved-movies';
  // const id = path ? card._id : card.id;
  // const saveMovie = saveMovieId(id);

  function handleSaveClick() {
    if (path) {
      onDelete(card);
    } else {
      if (isSaved) {
        onDelete(card);
        setIsSaved(!isSaved);
      } else {
        handleSaveMovie(card);
        // console.log(card);
        setIsSaved(!isSaved);
      }
    }
  }

  return (
    <>
      <li className="movie">
        <img
          className="movie__image"
          src={card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image}
          alt={card.nameRU}></img>
        <div className="movie__info">
          <h1 className="movie__name">{card.nameRU}</h1>
          <p className="movie__duration">{`${durationMovieHours}ч ${durationMovieMinuts}м`}</p>
          <button type="button" className={classButton} onClick={handleSaveClick} />
        </div>
      </li>
    </>
  );
}
export default MoviesCard;
