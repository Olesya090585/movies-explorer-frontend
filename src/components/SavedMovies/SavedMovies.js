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
  // const FilterLitlleMovies = !isSearchMovies
  //   ? littleMovies(isSaveMovies)
  //   : littleMovies(isFilterMovies);
  
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
    localStorage.setItem("savemovies", JSON.stringify(filterMovies));
    localStorage.setItem("query", query);
    console.log(isFilterMovies);
    if (filterMovies.length === 0) {
      return("По вашему запросу ничего не найдено");
    }}

    function handleSaveChechbox(e) {
      if (e.target.checked) {
        setIsLitlleMovies(true);
      } else {
        setIsLitlleMovies(false);
      }
    }
    useEffect(() => {
      setIsFilterMovies(state => state.filter(movie => isSaveMovies.find(card => card._id === movie._id)));
    }, [isSaveMovies]);
    // useEffect(() => {
    //   const storedSaveMovies = localStorage.getItem("savemovies");
    //   if (storedSaveMovies) {
    //     setIsSaveMovies(JSON.parse(storedSaveMovies));
    //   }
    // }, []);

  return (
    <>
      <Header handleIsLogin={handleIsLogin} isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          onSearch={handleSubmit}
          onLitlleMovies={isLitlleMovies}
          isQuery={isSearchMovies} 
          setIsQuery={setIsSearchMovies}
          onCheckbox={handleSaveChechbox}
        />
        <MoviesCardList
          saveMovieId={saveMovieId}
          // movies={isSaveMovies}
          movies={isSaveMovies}
          onDelete={onDelete}
          // isSaveMovies={isSaveMovies}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
