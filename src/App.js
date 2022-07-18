import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import ThirdPartyAPI from './ThirdPartyAPI';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/api" element={ <ThirdPartyAPI /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
