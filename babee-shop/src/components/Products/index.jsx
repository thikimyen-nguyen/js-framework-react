import { allProductsUrl } from "../../api";
import useFetch from "../../hooks/useFetch";
import ErrorHandling from "../ErrorHandle";
import Loader from "../Loader";
import ProductCard from "./Product/productCard";


export function ProductsList() {
    const { data, isError, isLoading } = useFetch(allProductsUrl);

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
  
  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="flex flex-wrap">
        {data.map((product) => (
         <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}


