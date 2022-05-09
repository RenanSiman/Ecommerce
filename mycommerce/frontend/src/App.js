import React from "react";
import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            MarVeu Store
          </a>
        </div>
        <div>
          <a href="/carrinho">Carrinho</a>
          <a href="/login">Login</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((prod) => (
            <Product key={prod._id} prod={prod}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">Todos os direitos reservados.</footer>
    </div>
  );
}

export default App;
