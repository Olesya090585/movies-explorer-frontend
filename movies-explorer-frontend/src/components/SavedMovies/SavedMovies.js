import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";
import "../Movies/Movies.css";

function SavedMovies({ handleIsLogin, isLogin }) {
  return (
    <>
    <Header handleIsLogin={handleIsLogin} isLogin={isLogin}/>
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </main>
    <Footer />
    </>
  );
}
export default SavedMovies;
