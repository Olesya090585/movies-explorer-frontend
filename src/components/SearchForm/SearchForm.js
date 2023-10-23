import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import "../SearchForm/SearchForm.css";

function SearchForm() {
  function hundleSubmit(e) {
    e.preventDefault();
  
  }
  return (
    <aside className="search">
      <div className="search__container">
        <form className="search__form" noValidate onSubmit={hundleSubmit}>
          <input
            className="search__input"
            name="search"
            placeholder="Фильм"
            type="search"
            required
            minLength={2}
            maxLength={30}

          />
          <button className="search__button" type="submit"></button>
        </form>
      </div>
      <FilterCheckbox />
    </aside>
  );
}
export default SearchForm;
