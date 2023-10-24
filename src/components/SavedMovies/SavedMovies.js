import React, {useEffect} from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';

function SavedMovies({ handleIsLogin, isLogin, setIsSaveMovies, isSaveMovies, saveMovieId }) {
  useEffect(() => {
    const storedSaveMovies = localStorage.getItem("saveMovies");
    if (storedSaveMovies) {
      setIsSaveMovies(JSON.parse(storedSaveMovies));
    }
  }, []);
  return (
    <>
      <Header handleIsLogin={handleIsLogin} isLogin={isLogin} />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList saveMovieId={saveMovieId} isSaveMovies={isSaveMovies}/>
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
