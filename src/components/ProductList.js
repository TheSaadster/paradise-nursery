import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Lavender', description: 'Aromatic and calming', cost: 10, image: '/images/lavender.jpg' },
  { id: 2, name: 'Aloe Vera', description: 'Medicinal plant for skin', cost: 15, image: '/images/aloe-vera.jpg' }
];

const ProductList = ({ addToCart }) => (
  <main>
    <h2>Our Plants</h2>
    <section>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  </main>
);

export default ProductList;
