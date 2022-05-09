import React from "react";
import data from "./data";

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
            <div key={prod._id} className="card">
              <a href={`/product/${prod._id}`}>
                <img className="medium" src={prod.image} alt={prod.codename} />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>{prod.codename}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-half"></i>
                  </span>
                </div>
                <div className="price">R$ {prod.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">Todos os direitos reservados.</footer>
    </div>
  );
}

export default App;
