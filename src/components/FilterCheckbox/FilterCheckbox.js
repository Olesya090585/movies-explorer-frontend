import React from 'react';
import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox({ onCheckbox, isShort }) {
  return (
    <aside className="checkbox-filter">
      <label className="checkbox-filter__container" htmlFor="checkbox">
        <input className="checkbox-filter__input" type="checkbox" id="checkbox" onChange={onCheckbox} checked={isShort} />
        <span className="checkbox-filter__inner">Короткометражки</span>
      </label>
    </aside>
  );
}
export default FilterCheckbox;
