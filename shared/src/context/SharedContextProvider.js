import React, { createContext, useContext, useState } from 'react';

export const SharedContext = createContext({
  value: 0,
  setValue: () => { },
  genres: '',
  setGenres: () => { }
});

export function SharedContextProvider({ children }) {
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState('');

  const updateSharedState = (newValue) => {
    setValue(newValue);
  };

  const updateGenres = (newValue) => {
    console.log("Updating genres to:", newValue);
    setGenres(newValue);
  };

  
  console.log("TestContextProvider initialized with value:", value);
  return (
    <SharedContext.Provider value={{ value, updateSharedState, genres, updateGenres }}>
      {children}
    </SharedContext.Provider>
  );
}

export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error('useSharedContext must be used within an AppContextProvider');
  }
  return context;
};