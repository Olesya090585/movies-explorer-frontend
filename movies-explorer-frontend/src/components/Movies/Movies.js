import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm.js";
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";
import "../Movies/Movies.css";

function Movies({ handleIsLogin, isLogin }) {
  return (
    <>
    <Header handleIsLogin={handleIsLogin} isLogin={isLogin}/>
    <main className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
    <Footer />
    </>
  );
}
export default Movies;
