import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

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
            <Route path="/cart/:id?" component={CartPage}></Route>
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path="/" component={Home} exact></Route>
        </main>
        <footer className="row center">Todos os direitos reservados.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
