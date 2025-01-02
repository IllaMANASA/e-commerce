// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import GlobalStyles from './GlobalStyles';
import Buy from './components/Buy';
import Login from './components/Login';
import SignUp from './components/SignUp';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <NavBar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </CartProvider>
  );
}

export default App;
