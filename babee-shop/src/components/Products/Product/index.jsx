import { useParams } from "react-router-dom";
import useProductsStore from "../../../store/products"
import { useEffect } from "react";
import ErrorHandling from "../../ErrorHandle";
import Loader from "../../Loader";
import { allProductsUrl } from "../../../api";
import { PrimaryButton } from "../../Buttons";

function SingleProduct() {
    const {products, isError, isLoading, fetchProducts } = useProductsStore();
    let { id } = useParams();
    const singleProductUrl = `${allProductsUrl}/${id}`;
    console.log(singleProductUrl)
    useEffect(() => {
        fetchProducts(singleProductUrl);
      }, [fetchProducts, singleProductUrl]);

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
   
<section className="overflow-hidden ">
  <div className="container mx-auto">
    <div className="lg:w-4/5 mx-auto md:flex ">
        <img src={products.image.url} alt={products.title} className="md:flex-1 mx-auto md:w-1/2" />
        <div className="w-full px-6 md:flex-1">
            <h1 className=" mb-1">{products.title}</h1>
            <div className="flex mb-4">
            <span className="flex items-center">Rating:
                <span className="text-primary ml-3">{products.rating}/5</span>
            </span>
            
            </div>
            <p>{products.description}</p>       
            <div className="text-center" >
            <PrimaryButton label='Add to Cart' />
            </div>
        </div>
    </div>
  </div>
</section>
    
  )
}

export default SingleProduct
