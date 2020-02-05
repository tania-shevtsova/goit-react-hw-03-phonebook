import React from "react";

const Filter = ({ valueFilter, onChangeInputFilter }) => (
  <input
    minLength={5}
    type="text"
    value={valueFilter}
    onChange={onChangeInputFilter}
  />
);

export default Filter;