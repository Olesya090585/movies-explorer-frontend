import React, { useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm.js";
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";
// import { useFilter } from "../../hooks/useFilter";
// import { searchMovies } from "../../utils/utils";
import "../Movies/Movies.css";

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
  saveMovieId
}) {
  // const [moviesShort, setMoviesShort] = useState(false);
  // const filter = useFilter(movies, moviesShort);
  // const [isMoviesShown, setIsMoviesShown] = useState(0);
  // const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);
  return (
    <>
      <Header isLoggedIn={!isLoggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          isQuery={isQuery}
          setIsQuery={setIsQuery}
          onCheckbox={onCheckbox}
          isShort={isShort}
        />
        {/* <Preloader /> */}
        <MoviesCardList
          isErrorLoadingMessage={isErrorLoadingMessage}
          movies={movies}
          handleSaveMovie={handleSaveMovie}
          saveMovieId={saveMovieId}
        />
      </main>
      <Footer />
    </>
  );
}
export default Movies;
