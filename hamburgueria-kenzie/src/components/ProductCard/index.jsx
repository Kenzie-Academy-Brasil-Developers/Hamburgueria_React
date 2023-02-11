import React from "react";
import { Container } from "./styles";

const ProductCard = ({ element, addmyProducts }) => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <img src={element.img} alt="" />
            <h3>{element.name}</h3>
            <span>{element.category}</span>
            <small>R$ {element.price}</small>
            <button onClick={() => addmyProducts(element)}>Adicionar</button>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default ProductCard;
