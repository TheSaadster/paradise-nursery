import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartQuantity }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Shop Plants</Link>
    <Link to="/cart">Cart ({cartQuantity})</Link>
  </nav>
);

export default Navbar;
