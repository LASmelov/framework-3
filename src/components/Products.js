import React from 'react';
import Stars from './Stars';

import style from'./module.css'

const Products = ({ product, onDelete }) => {
  return (
    <div key={product.id} className="product-card" onDoubleClick={() => onDelete(product.id)}>
      <div className='productImg'>
      {product.images.map((image, idx) => (
        <img key={idx} src={image} alt={`${product.name} ${idx}`} />
      ))}</div>
      <h3>Title: {product.title}</h3>
      <h4>Price: {product.price} $</h4>
      <Stars rating={product.rating} />
    </div>
  );
};

export default Products;
