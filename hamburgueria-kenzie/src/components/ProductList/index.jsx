import ProductCard from "../ProductCard";


const ProductList = ({addmyProducts, searchProductList}) => {
  return (
    <>
      {searchProductList.map((element) => (
        <ProductCard key={element.id} element={element} addmyProducts={addmyProducts}/>
      ))}
    </>
  );
};

export default ProductList;
