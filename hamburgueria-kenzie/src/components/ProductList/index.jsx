import { Container } from "./styles";
import React from "react";

const ProductList = ({ element,addProductToTeam}) => {
  return (
    <>
      <Container>
        <li>
          <img src={element.img} alt="" />
          <h3>{element.name}</h3>
          <span>{element.category}</span>
          <small>R$ {element.price}</small>
          <button onClick={()=> addProductToTeam(element)}>Adicionar</button>
        </li>
      </Container>
    </>
  );
};

export default ProductList;
