// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(query);
    }
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={query}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      className="search-input"
    />
  );
};

export default SearchBar;
