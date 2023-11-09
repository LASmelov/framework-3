 import React from 'react';
import Stars from './Stars';

const ProductList = ({ product, onDelete }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <Stars rating={product.rating} />
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};


export default ProductList;
