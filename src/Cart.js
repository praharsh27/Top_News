import React from 'react';

export default function Cart({ category, imageUrl, title, content, author }) {
  return (
    <div className="cart">
      <div className="cart-category">{category}</div>
      <img src={imageUrl} alt={title} className="cart-image" />
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="cart-author">Author Name: {author}</p> {/* Ensure this line is correct */}
    </div>
  );
}
