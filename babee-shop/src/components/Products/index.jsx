import { useEffect } from "react";
import { allProductsUrl } from "../../api";
import useProductsStore from "../../store/products";
import ErrorHandling from "../ErrorHandle";
import Loader from "../Loader";
import ProductCard from "./productCard";


export function ProductsList() {
  const { products, isError, isLoading, fetchProducts } = useProductsStore();

  useEffect(() => {
      fetchProducts(allProductsUrl);
    }, [fetchProducts]);
  
  if (isError) {
      return <div>
          <ErrorHandling />
      </div>
  }
  if (isLoading) {
      return (
          <div>
              <Loader />
          </div>
      )
  }
  console.log(products)

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="flex flex-wrap">
        {products?.map((product) => (
         <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}


