{/*Extra credit*/}

import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

// Custom hook to use count and setCount from context
export const useCount = () => useContext(CountContext);

// Manage count state
export const ManageCount = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
