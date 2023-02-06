import ProductList from "./components/ProductList";
import { GlobalStyle } from "./components/GlobalStyles";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { api } from "./components/services/api";
// import Cart from "./components/Cart";
import CartToCard from "./components/Cart->Card/addCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const localProductTeam = localStorage.getItem("@PRODUTOSFOOD")
  const [loading, setLoding] = useState(false)
  const [products, setProducts] = useState([]);
  const [productTeam, setProductTeam] = useState(localProductTeam ? JSON.parse(localProductTeam) : [])


  useEffect(() => {
    localStorage.setItem("@PRODUTOSFOOD", JSON.stringify(productTeam))
  }, [productTeam])


  const addProductToTeam = (product) => {
    if (productTeam.length < 2) {
      const newProduct = { ...product }
      setProductTeam([...productTeam, newProduct])
    } else {
      toast.error('você só pode comprar 2 produtos!')
    }
  }

  const removeProductToTeam = (productId) => {
    const newProductTeam = productTeam.filter(product => product.id !== productId)
    setProductTeam(newProductTeam)
  }



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
        theme="light"
      />
      {/* Same as */}
      <GlobalStyle />
      <Header />
      {loading ? (
        <p>70% construido...</p>
      ) : (
        <main>
          {products.map(((element, index) => (
            <ProductList key={index} element={element} addProductToTeam={addProductToTeam} />
          )))}
        </main>
      )}
      {/* <Cart /> */}
      <CartToCard removeProductToTeam={removeProductToTeam} />

      {productTeam.map(product => (
        <ul key={product.id}>
          <img class="img-cart" src={product.img} alt="" />
          <div className="name-category">
            <h3>{product.name}</h3>
            <span className="category">{product.category}</span>
          </div>
          <button className="remove" onClick={() => removeProductToTeam(product.id)}>Remover</button>
        </ul>
      ))}
   
      {/* Same as */}
    </>
  );
}

export default App;
