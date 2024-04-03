import { useEffect, useState } from "react";
import { allProductsUrl } from "../../api";
import useProductsStore from "../../store/products";
import ErrorHandling from "../ErrorHandle";
import Loader from "../Loader";
import ProductCard from "./productCard";
// import { PrimaryButton } from "../Buttons";


export function ProductsList() {
  const { products, isError, isLoading, fetchProducts } = useProductsStore();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  // Search
  
const handleSearchChange = (event) => {
  const input = event.target.value;
  setSearchInput(input);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );
  setSearchResults(filteredProducts);
};

// const handleSearchClick = () => {
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchInput.toLowerCase())
//   );
//   setSearchResults(filteredProducts);
// };
  return (
    <div>
      <div className="mb-8 text-center">
          <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-3/4 md:w-1/2 lg:w-1/3 p-3 border border-primary text-white bg-black rounded-lg"
          />
          
          {/* <PrimaryButton onClick={handleSearchClick} label='Search' /> */}
      </div>
      {searchInput === '' ? (
        <h1 className="font-bold mb-4">All Products</h1>
      ) : (
        <h1 className="font-bold mb-4">Search Results</h1>
      )}

      <div className="flex flex-wrap">
        {searchInput === '' ? (
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          searchResults?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      
    </div>
  );
}


