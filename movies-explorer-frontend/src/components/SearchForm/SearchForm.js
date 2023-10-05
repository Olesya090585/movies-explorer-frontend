import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import "../SearchForm/SearchForm.css";

function SearchForm() {
  return (
    <aside className="search">
      <div className="search__container">
        <form className="search__form">
          <input
            className="search__input"
            name="search"
            placeholder="Фильм"
            type="search"
          />
          <button className="search__button" type="submit"></button>
        </form>
      </div>
      <FilterCheckbox />
    </aside>
  );
}
export default SearchForm;
