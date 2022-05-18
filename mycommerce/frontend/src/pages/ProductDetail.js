import React from "react";
import data from "../data";
import Rating from "../components/Rating";

export default function ProductDetail(props) {
  const prod = data.products.find((e) => e._id === props.match.params.id);
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
                    <span className="error">Indisponível</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block">Adicione ao carrinho</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
