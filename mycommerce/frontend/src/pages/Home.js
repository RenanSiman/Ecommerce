import React from "react";
import Product from "../components/Product";
import data from "../data";

export default function Home() {
  return (
    <div>
      <div className="row center">
        {data.products.map((prod) => (
          <Product key={prod._id} prod={prod}></Product>
        ))}
      </div>
    </div>
  );
}
