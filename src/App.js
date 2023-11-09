import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h1>Header</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
      <h1>Footer</h1>
    </div>
  );
};

export default App;
