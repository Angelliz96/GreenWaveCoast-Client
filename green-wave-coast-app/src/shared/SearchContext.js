// SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <SearchContext.Provider value={{ query, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
