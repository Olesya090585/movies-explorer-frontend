import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";
import "../Movies/Movies.css";
import MainApi from "../../utils/MainApi";
import { searchMovies, littleMovies } from "../../utils/utils";

function SavedMovies({
  handleIsLogin,
  isLoggedIn,
  setIsSaveMovies,
  isSaveMovies,
  saveMovieId,
  onDelete
}) {
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [isFilterMovies, setIsFilterMovies] = useState([]);
  const [isLitlleMovies, setIsLitlleMovies] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    MainApi.getInitialMovies(token)
      .then((data) => {
        setIsSaveMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  function handleSubmit(query) {
    setIsSearchMovies(query);
    console.log(query);
    const filterMovies = searchMovies(isSaveMovies, query);
    console.log(filterMovies);
    setIsFilterMovies(filterMovies);
    // localStorage.setItem("savemovies", JSON.stringify(filterMovies));
    // localStorage.setItem("query", query);
    console.log(isFilterMovies);
    if (filterMovies.length === 0) {
      return("По вашему запросу ничего не найдено");
    }}
    useEffect(() => {
      setIsFilterMovies(state => state.filter(movieId => isSaveMovies.find(card => card._id === movieId._id)));
     
    }, [isSaveMovies]);

  return (
    <>
      <Header handleIsLogin={handleIsLogin} isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          onSearch={handleSubmit}
          onLitlleMovies={isLitlleMovies}
          isQuery={isSearchMovies} 
          setIsQuery={setIsSearchMovies}
        />
        <MoviesCardList
          saveMovieId={saveMovieId}
          movies={isSaveMovies}
          onDelete={onDelete}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
