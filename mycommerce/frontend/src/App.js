import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              MarVeu Store
            </a>
          </div>
          <div>
            <a href="/cart">Carrinho</a>
            <a href="/login">Login</a>
          </div>
        </header>
        <main>
            <Route path="/product/:id" component={ProductDetail}></Route>
            <Route path="/" component={Home} exact></Route>
        </main>
        <footer className="row center">Todos os direitos reservados.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
