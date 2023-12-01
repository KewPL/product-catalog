import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const { setUserName } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression to match only letters (no numbers or special characters)
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(name)) {
      setError('Your name should only contain letters');
    } else {
      setUserName(name);
      setError(''); // Clear any previous error messages
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginSection">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError(''); // Clear error message when user types
        }}
      />
      <button type="submit">Login</button>
      {error && <div className="error-message">{error}</div>} {/* Display error message if present */}
    </form>
  );
};

export default Login;
