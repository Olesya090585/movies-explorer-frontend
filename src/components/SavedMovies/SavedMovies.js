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
  isSaveMovies,
  setIsSaveMovies,
  saveMovieId,
  onDelete,
}) {
  const [isShort, setIsShort] = React.useState(false);
  const [isQuery, setIsQuery] = React.useState("");
  const [isErrorLoadingMessage, setErrorLoadingMessage] = React.useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    MainApi.getInitialMovies(token)
      .then((data) => {
        setIsSaveMovies(data);
        localStorage.setItem("saveMovies", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, [setIsSaveMovies]);

  function handleSearch(query) {
    const dataMovies = searchMovies(
      JSON.parse(localStorage.getItem("saveMovies")),
      query
    );
    const filterMovies = littleMovies(dataMovies, isShort);
    setIsSaveMovies(filterMovies);
    if (filterMovies.length === 0) {
      setErrorLoadingMessage("По вашему запросу ничего не найдено");
    } else {
      setErrorLoadingMessage("");
    }
  }

  function handleCheckbox(event) {
    const checkbox = event.target.checked;
    setIsShort(checkbox);
    const dataMovies = searchMovies(
      JSON.parse(localStorage.getItem("saveMovies")),
      isQuery
    );
    const filterMovies = littleMovies(dataMovies, checkbox);
    setIsSaveMovies(filterMovies);
    if (filterMovies.length === 0) {
      setErrorLoadingMessage("По вашему запросу ничего не найдено");
    } else {
      setErrorLoadingMessage("");
    }
  }

  return (
    <>
      <Header handleIsLogin={handleIsLogin} isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          onSearch={handleSearch}
          isQuery={isQuery}
          setIsQuery={setIsQuery}
          onCheckbox={handleCheckbox}
          isShort={isShort}
        />
        <MoviesCardList
          movies={isSaveMovies}
          saveMovieId={saveMovieId}
          isSaveMovies={isSaveMovies}
          onDelete={onDelete}
          isErrorLoadingMessage={isErrorLoadingMessage}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
