import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (product, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + amount } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartQuantity={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
