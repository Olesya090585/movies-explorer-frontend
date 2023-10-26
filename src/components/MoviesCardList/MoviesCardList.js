import React from 'react';
import '../MoviesCardList/MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isErrorLoadingMessage, movies, handleSaveMovie, onDelete, saveMovieId, isSaveMovies }) {
  const location = useLocation();

  return (
    <section className="movie-list">
      <ul className="movie-list__container">
        {movies.map((card) => (
          <MoviesCard
            key={card._id || card.id}
            card={card}
            handleSaveMovie={handleSaveMovie}
            onDelete={onDelete}
            saveMovieId={saveMovieId}
            isSaveMovies={isSaveMovies}></MoviesCard>
        ))}
      </ul>
      <div className={`movie-list__show ${location.pathname === '/saved-movies' ? 'movie-list__show_size' : ''}`}>
        <button type="button" className={`movie-list__button ${location.pathname === '/saved-movies' ? 'movie-list__button_hidden' : ''}`}>
          Еще
        </button>
      </div>
    </section>
  );
}
export default MoviesCardList;
