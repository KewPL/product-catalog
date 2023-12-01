import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [basketItems, setBasketItems] = useState([]);

  return (
    <UserContext.Provider value={{ userName, setUserName, basketItems, setBasketItems }}>
      {children}
    </UserContext.Provider>
  );
};
