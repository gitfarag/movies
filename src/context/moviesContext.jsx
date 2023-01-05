import React, { createContext, useState } from "react";

export const MoviesContext = createContext(null);

export const MoviesContextProvider = ({ children }) => {
  const [popular,setPopular] = useState([])
  const [latest,setLatest]= useState([])
  const [topRated,setTopRted]= useState([])

  const value = {
    popular,
    setPopular,
    latest,
    setLatest,
    topRated,
    setTopRted,
  };

  return (
    <MoviesContext.Provider value={value}> {children} </MoviesContext.Provider>
  );
};