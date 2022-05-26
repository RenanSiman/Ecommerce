import React from "react";

export default function CartPage(props) {
  const prodId = props.match.params.id;
  const qtd = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Carrinho</h1>
      <p>
          Adicionado ao Carrinho: ProductID = {prodId}; Qtd: {qtd}
      </p>
    </div>
  );
}
