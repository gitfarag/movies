import React, { createContext, useState } from "react";

export const CatContext = createContext(null);

export const CatContextProvider = ({ children }) => {
    const [cat, setCat] = useState('')
    const [movieType, setMovieType] = useState([])

  const value = {
    cat,
    setCat,
    movieType,
    setMovieType
  };

  return (
    <CatContext.Provider value={value}> {children} </CatContext.Provider>
  );
};