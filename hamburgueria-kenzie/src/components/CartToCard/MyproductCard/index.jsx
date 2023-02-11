import React from "react";
import { Container } from "./styles";

const Card = ({ product, removemyProduct }) => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <img src={product.img} alt="" />
            <div className="name-category">
              <h5>{product.name}</h5>
              <h4 className="category">{product.category}</h4>
            </div>
          </li>
        </ul>
        <button className="but" onClick={() => removemyProduct(product.id)}>
          Remover
        </button>
      </Container>
    </>
  );
};

export default Card;
