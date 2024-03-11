import useProductsStore from "../../store/products";
import ProductCard from "./Product/productCard";
import { useEffect } from 'react';


export function ProductsList() {
    const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
         <ProductCard  product={product}/>
        ))}
      </div>
    </div>
  );
}


