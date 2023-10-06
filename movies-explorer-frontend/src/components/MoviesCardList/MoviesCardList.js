import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const location = useLocation();
  return (
    <section className="movie-list">
      <ul className="movie-list__container">
        <MoviesCard></MoviesCard>
      </ul>
      <div
        className={`movie-list__show ${
          location.pathname === "/saved-movies" ? "movie-list__show_size" : ""
        }`}
      >
        <button
          type="button"
          className={`movie-list__button ${
            location.pathname === "/saved-movies"
              ? "movie-list__button_hidden"
              : ""
          }`}
        >
          Еще
        </button>
      </div>
    </section>
  );
}
export default MoviesCardList;
