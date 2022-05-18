import React from "react";
import Rating from "./Rating";

export default function Product(props) {
  const { prod } = props;
  return (
    <div key={prod._id} className="card">
      <a href={`/product/${prod._id}`}>
        <img className="medium" src={prod.image} alt={prod.codename} />
      </a>
      <div className="card-body">
        <a href={`/product/${prod._id}`}>
          <h2>{prod.codename}</h2>
        </a>
        <Rating rating={prod.rating}></Rating>
        <div className="price">MV$ {prod.price.toFixed(2)}</div>
      </div>
    </div>
  );
}
