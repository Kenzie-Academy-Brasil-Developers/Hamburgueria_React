import { Container } from "./styles";


const CartToCard = () => {


  return (
    <>
      <Container>
        <section>
          <h2>Carrinho de compras</h2>
          <div className="total-money">
            <h3>Total</h3>
            <h4>R$</h4>
          </div>
           <button>Remover Todos</button>
        </section>
      </Container>
    </>
  );
};

export default CartToCard;
