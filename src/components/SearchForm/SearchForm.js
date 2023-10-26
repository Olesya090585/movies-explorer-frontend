import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import "../SearchForm/SearchForm.css";

function SearchForm({ onSearch, isQuery, setIsQuery, onCheckbox, isShort }) {
  function hundleSubmit(e) {
    e.preventDefault();
    onSearch(isQuery);
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
            onChange={(e) => setIsQuery(e.target.value)}
            required
            value={isQuery}
            minLength={2}
            maxLength={30}
          />
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox onCheckbox={onCheckbox} isShort={isShort} />
      </div>
      {/* <FilterCheckbox onCheckbox={onCheckbox} isShort={isShort} /> */}
    </aside>
  );
}
export default SearchForm;
