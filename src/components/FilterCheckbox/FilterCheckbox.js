import React from "react";
import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <aside className="checkbox-filter">
      <label className="checkbox-filter__container" for="checkbox">
        <input
          className="checkbox-filter__input"
          type="checkbox"
          id="checkbox"
        ></input>
        <span className="checkbox-filter__inner">Короткометражки</span>
      </label>
    </aside>
  );
}
export default FilterCheckbox;
