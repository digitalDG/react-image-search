import React, { useState } from 'react';
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import Search from './components/Search';
import ImageGallary from './components/ImageGallary';
import { ImageAppContextProvider } from './contexts/app-context';


function App() {

  
  return (
    <Box>
      <ImageAppContextProvider>
        <NavBar />
        <Search />
        <ImageGallary />
      </ImageAppContextProvider>
    </Box>
  );
}

export default App;
