import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main>
    <h1>Welcome to Paradise Nursery</h1>
    <Link to="/products">
      <button>Shop Now</button>
    </Link>
  </main>
);

export default LandingPage;
