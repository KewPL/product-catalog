import React from 'react';

const Filter = ({ setFilter }) => {
    return (
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    );
  };
  

export default Filter;
