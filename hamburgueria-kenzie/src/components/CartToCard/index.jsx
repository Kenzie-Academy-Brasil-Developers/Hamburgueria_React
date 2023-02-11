import Card from "./MyproductCard";
import { Container } from "./styles";

const CartToCard = ({ myProducts, removemyProduct, removeAllmyproducts, totalProducts}) => {
  return (
    <>
      <section>
        <Container >
          <h2>Carrinho de compras</h2>
          {myProducts.length > 0 ? (
            <>
              <div>
                {myProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    removemyProduct={removemyProduct}
                  />
                ))}
              </div>
              <div className="total-money">
                <h4 className="total">Total</h4>
                <h4>R${totalProducts}</h4>
              </div>
              <button
                className="removeAll"
                onClick={() => removeAllmyproducts()}
              >
                Remover Todos
              </button>
            </>
          ) : (
            <div>
              <h3>Sua sacola está vazia</h3>
              <h4>Adicione itens</h4>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default CartToCard;
