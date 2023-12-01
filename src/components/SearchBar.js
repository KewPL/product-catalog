import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    );
  };

  export default SearchBar;