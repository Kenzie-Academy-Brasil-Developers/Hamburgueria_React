import { useState } from "react";
import { Container } from "./styles";

const Header = ({setSearch}) => {

  const [searchValue, setSearchValue] = useState('')

  const submit = (event) => {
  event.preventDefault()
  setSearch(searchValue)
  setSearchValue('')
  }
  return (
    <>
      <Container>
        <header>
          <div className="title-header">
            <h1>Burguer</h1>
            <h3>Kenzie</h3>
            <form onSubmit={submit}className="input-search">
              <div className="search-but">
                <input value={searchValue} onChange={(event)=> setSearchValue(event.target.value)}
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Digitar Pesquisa"
                />
                <button type="submit"className="but-header">Pesquisar</button>
              </div>
            </form>
          </div>
        </header>
      </Container>
    </>
  );
};

export default Header;
