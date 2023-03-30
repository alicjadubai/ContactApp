import React, { useState, useEffect } from "react";

const SearchFunction = ({ items, onFilter, filterItems, personnel }) => {
  const [filter, setFilter] = useState("");

  function handleInput(event) {
    setFilter(event.target.value);
    onFilter(filterItems(items, event.target.value, personnel));
  }

  return <input type="text" id="myInput" onChange={handleInput} />;
};

export default SearchFunction;
