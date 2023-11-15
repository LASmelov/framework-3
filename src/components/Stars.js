import React from 'react';

import style from'./module.css'

const Stars = ({ rating }) => {
  let fullStars = Math.floor(rating);
  let hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="fa fa-star active"></span>);
      } else if (hasHalfStar) {
        stars.push(<span key={i} className="fa fa-star-half-o active"></span>);
        hasHalfStar = false; 
      } else {
        stars.push(<span key={i} className="fa fa-star"></span>);
      }
    }

    return stars;
  };

  return (
    <div className="stars">
      {renderStars()}
    </div>
  );
};


export default Stars;
