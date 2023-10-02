import React from "react";
import SearchForm from "../SearchForm/SearchForm.js";
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import "../Movies/Movies.css";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </section>
  );
}
export default Movies;
