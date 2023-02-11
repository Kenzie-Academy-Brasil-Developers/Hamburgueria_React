import { GlobalStyle } from "./components/GlobalStyles";
import Header from './components/Header';
import ProductList from "./components/ProductList";
import React, { useEffect, useState } from "react";
import { api } from "./components/services/api";
import CartToCard from "./components/CartToCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const localmyProducts = localStorage.getItem("@PRODUTOSFOOD")
  const [products, setProducts] = useState([])
  const [myProducts, setmyProducts] = useState(localmyProducts ? JSON.parse(localmyProducts) : [])
  const [loading, setLoding] = useState(false)
  const [totalProducts, setTotalProducts] = useState(0)
  const [search, setSearch] = useState("")


  const searchProductList = products.filter((prod) => {
    return search === "" ? true : (prod.name.toLowerCase()).includes(search.toLowerCase())

  })

  useEffect(() => {
    const totalValue = myProducts.reduce((acc, product) => {
      return acc + product.price;
    }, 0)
    setTotalProducts(totalValue.toFixed(2))
  }, [myProducts])



  useEffect(() => {
    localStorage.setItem("@PRODUTOSFOOD", JSON.stringify(myProducts))
  }, [myProducts])


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
      } finally {
      }
    }
    getProducts();
  }, []);


  useEffect(() => {
    async function getProducts() {
      try {
        setLoding(true)
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoding(false)
        }, 1000);
      }
    }
    getProducts();
  }, []);


  const addmyProducts = (product) => {
    if (!myProducts.some(p => p.id === product.id)) {
      setmyProducts([...myProducts, product])
      toast.success('O produto foi adicionado com sucesso!')
    } else {
      toast.warning('este produto já está em sua lista!')
    }
  }

  const removemyProduct = (productId) => {
    const newList = myProducts.filter(product => product.id !== productId)
    setmyProducts(newList)
  }

  const removeAllmyproducts = () => {
    setmyProducts([])
    setTimeout(() => {
      toast.success('Todos removidos com sucesso!')

    }, 1000);
  }

  return (

    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ width: "315px", margin: '20px' }}
      />
      <GlobalStyle />
      {loading ? (
        <p>Carregando....</p>
      ) : (
        <main>
          <Header setSearch={setSearch} />
          <ul>
            <ProductList searchProductList={searchProductList} addmyProducts={addmyProducts} />
            <CartToCard myProducts={myProducts} removemyProduct={removemyProduct} removeAllmyproducts={removeAllmyproducts} totalProducts={totalProducts} />
          </ul>
            <div>
              {search && <p>Resultasos de busca para:{search}<button className="but-clean" onClick={() => setSearch('')}>Limpar Lista</button> </p>}
              
            </div>
        </main>
      )}
    </>
  )
}

export default App;