import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import '../Movies/Movies.css';
import useResponsive from '../../hooks/useResponsive';

function Movies({
  isLoggedIn,
  onSearch,
  isLoading,
  isErrorLoadingMessage,
  movies,
  setMovies,
  isQuery,
  setIsQuery,
  onCheckbox,
  isShort,
  handleSaveMovie,
  onDelete,
  saveMovieId,
  isSaveMovies,
}) {
  const [windowWidth] = useResponsive();
  const [visibleMovies, setVisibleMovies] = useState(16);

  useEffect(() => {
    let initialVisibleMovies = 16;

    if (windowWidth >= 1151) {
      initialVisibleMovies = 16;
    } else if (windowWidth >= 908) {
      initialVisibleMovies = 12;
    } else if (windowWidth >= 512) {
      initialVisibleMovies = 8;
    } else if (windowWidth <= 511) {
      initialVisibleMovies = 5;
    }

    setTimeout(() => {
      setVisibleMovies(initialVisibleMovies);
    }, 0);
  }, [windowWidth, isQuery]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm onSearch={onSearch} isQuery={isQuery} setIsQuery={setIsQuery} onCheckbox={onCheckbox} isShort={isShort} />
        {!isLoading ? (
          <MoviesCardList
            isErrorLoadingMessage={isErrorLoadingMessage}
            movies={movies}
            visibleMovies={visibleMovies}
            setVisibleMovies={setVisibleMovies}
            handleSaveMovie={handleSaveMovie}
            onDelete={onDelete}
            saveMovieId={saveMovieId}
            isSaveMovies={isSaveMovies}
          />
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </>
  );
}
export default Movies;
