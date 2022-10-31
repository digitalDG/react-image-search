import React from 'react';
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar/NavBar";
import Search from './components/Search/Search';
import ImageGallary from './components/ImageGallary/ImageGallary';
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
