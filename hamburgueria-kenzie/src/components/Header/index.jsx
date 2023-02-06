import { Container } from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <header>
          <div className="title-header">
            <h1>Burguer</h1>
            <h3>Kenzie</h3>
          </div>
          <div className="input-search">
            <div className="search-but">
            <input type="text" name="text" id="text" placeholder="Digitar Pesquisa"/>
            <button>Pesquisar</button>
            </div>
          </div>
        </header>
      </Container>
    </>
  );
};

export default Header;
