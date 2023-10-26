import React, { useCallback } from 'react';
import '../MoviesCardList/MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isErrorLoadingMessage,
  movies,
  visibleMovies,
  setVisibleMovies,
  handleSaveMovie,
  onDelete,
  saveMovieId,
  isSaveMovies,
}) {
  const location = useLocation();

  const moreButtonClick = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1151) {
      setVisibleMovies(visibleMovies + 4);
    } else if (windowWidth >= 908) {
      setVisibleMovies(visibleMovies + 3);
    } else {
      setVisibleMovies(visibleMovies + 2);
    }
  }, [visibleMovies, setVisibleMovies]);

  return (
    <section className="movie-list">
      {isErrorLoadingMessage ? (
        <span className='movie-list_error'>{isErrorLoadingMessage}</span>
      ) : (
        <ul className="movie-list__container">
          {movies.slice(0, visibleMovies).map((card) => (
            <MoviesCard
              key={card._id || card.id}
              card={card}
              handleSaveMovie={handleSaveMovie}
              onDelete={onDelete}
              saveMovieId={saveMovieId}
              isSaveMovies={isSaveMovies}></MoviesCard>
          ))}
        </ul>
      )}

      {movies.length !== 0 && visibleMovies < movies.length && (
        <div className={`movie-list__show ${location.pathname === '/saved-movies' ? 'movie-list__show_size' : ''}`}>
          <button
            type="button"
            className={`movie-list__button ${location.pathname === '/saved-movies' ? 'movie-list__button_hidden' : ''}`}
            onClick={moreButtonClick}>
            Еще
          </button>
        </div>
      )}
    </section>
  );
}
export default MoviesCardList;
