import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import SearchBar from './SearchBar';
import Filter from './Filter';

const NavBar = ({ setSearchTerm, setFilter, handleSort, sortOption }) => {
  const { userName } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">My Product Catalog</div>
        <div>
          <SearchBar setSearchTerm={setSearchTerm} />
          <Filter setFilter={setFilter} />
        </div>
        <div>{userName ? `Welcome, ${userName}` : 'Welcome, Guest'}</div>
      </div>
    </nav>
  );
};

export default NavBar;
