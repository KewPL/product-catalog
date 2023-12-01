import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { UserProvider } from './components/UserContext';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import NavBar from './components/NavBar';
import Login from './components/Login';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const { data: products, isLoading, error } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );

  const filteredProducts = products
    ? products
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
          filter ? product.category === filter : true
        )
    : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOption === 'name') {
      return sortDirection === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortOption === 'price') {
      return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (option) => {
    if (option === sortOption) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOption(option);
      setSortDirection('asc');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <div className="App">
          <NavBar setSearchTerm={setSearchTerm} setFilter={setFilter} />
          <div className="login-container">
            <Login />
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div>An error occurred: {error.message}</div>
          ) : (
            <>
              <div className="sorting-options">
                <button onClick={() => handleSort('name')}>
                  Sort by Name {sortOption === 'name' && sortDirection === 'asc' && '↑'}
                  {sortOption === 'name' && sortDirection === 'desc' && '↓'}
                </button>
                <button onClick={() => handleSort('price')}>
                  Sort by Price {sortOption === 'price' && sortDirection === 'asc' && '↑'}
                  {sortOption === 'price' && sortDirection === 'desc' && '↓'}
                </button>
              </div>
              <ProductList products={currentProducts} />
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                paginate={paginate}
              />
            </>
          )}
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
