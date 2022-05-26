import React, { useState } from "react";
import data from "../data";
import Rating from "../components/Rating";

export default function ProductPage(props) {
  const prod = data.products.find((e) => e._id === props.match.params.id);
  const [qtd, setQtd] = useState(1);
  const addToCartHandler = () => {
    props.history.push(`/cart/${prod._id}?qtd=${qtd}`);
  };

  if (!prod) {
    return <div>Ops, não encontrei este personagem!</div>;
  }
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={prod.image} alt={prod.codename}></img>
        </div>
        <div className="col-1"></div>
        <ul>
          <li>
            <h1>{prod.codename}</h1>
          </li>
          <li>
            <Rating rating={prod.rating}></Rating>
          </li>
          <li>Preço: MV$ {prod.price}</li>
          <li>
            <p className="powers">Poderes</p>
            <ul>
              {prod.power.map((p) => (
                <li className="powers">{p}</li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="col-1"></div>
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Preço</div>
                <div className="price">MV${prod.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Em estoque: </div>
                <div>
                  {prod.countInStock > 0 ? (
                    <span className="success">{prod.countInStock}</span>
                  ) : (
                    <span className="danger">Indisponível</span>
                  )}
                </div>
              </div>
            </li>
            {prod.countInStock > 0 && (
              <>
                <li>
                  <div className="row">
                    <div>Qtd</div>
                    <div>
                      <select
                        value={qtd}
                        onChange={(e) => setQtd(e.target.value)}
                      >
                        {[...Array(prod.countInStock).keys()].map((i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <button onClick={addToCartHandler} className="primary block">
                    Adicionar ao carrinho
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
