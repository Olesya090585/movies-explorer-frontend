import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import "../SearchForm/SearchForm.css";

function SearchForm({ onSearch, isQuery, setIsQuery, onCheckbox, isShort }) {
  const [inputError, setInputError] = useState("");
  function hundleSubmit(e) {
    e.preventDefault();
    if (isQuery.trim() === "") {
      setInputError("Введите ключевое слово");
    } else {
      onSearch(isQuery);
    }
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
        {
          <span
            className={`search__error ${
              inputError ? "search__error_active" : ""
            }`}
          >
            {inputError}
          </span>
        }
        <FilterCheckbox onCheckbox={onCheckbox} isShort={isShort} />
      </div>
    </aside>
  );
}
export default SearchForm;
