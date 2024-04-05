import { useParams } from "react-router-dom";
import useProductsStore from "../../../store/products";
import { useEffect } from "react";
import ErrorHandling from "../../ErrorHandle";
import Loader from "../../Loader";
import { PrimaryButton } from "../../Buttons";
import Discount from "../../DiscountNote";

function SingleProduct() {
  const {
    singleProduct,
    isError,
    isLoading,
    fetchProductById,
    productReviews,
    addToCart
  } = useProductsStore();

  let { id } = useParams();
  useEffect(() => {
    fetchProductById(id);
  }, [fetchProductById, id]);
function handleAddToCart() {
  const currentProduct = JSON.parse(localStorage.getItem('currentProduct'));
  addToCart(currentProduct);
}
  if (isError) {
    return (
      <div>
        <ErrorHandling />
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <section className="overflow-hidden ">
      <div className="container mx-auto">
        <div className="lg:w-4/5 mx-auto md:flex ">
          <div className="w-80 mx-auto">
            <img
              src={singleProduct?.image?.url}
              alt={singleProduct?.title}
              className="w-full"
            />
          </div>
          <div className="w-full px-6 md:flex-1 mt-5">
            <h1 className=" mb-5">{singleProduct?.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                Rating:
                <span className="text-primary ml-3">
                  {singleProduct?.rating}/5
                </span>
              </span>
            </div>
            <p>{singleProduct.description}</p>
            {singleProduct.discountedPrice !== singleProduct.price && (
              <div className="my-3 flex items-center">
                <Discount
                  price={singleProduct.price}
                  discountedPrice={singleProduct.discountedPrice}
                />
                <span className="ml-5 line-through text-white text-sm">
                  Nok {singleProduct.price}
                </span>
              </div>
            )}

            <div className="m-auto my-5 flex items-center justify-between">
              {singleProduct.discountedPrice !== singleProduct.price ? (
                <div className="text-sm text-primary m-3">
                  Nok <span className="text-xl">{singleProduct.discountedPrice}</span>
                </div>
              ) : (
                <div className="text-primary text-sm">
                  Nok <span className="text-xl">{singleProduct.discountedPrice}</span>
                </div>
              )}
              <div className="self-right">
                <PrimaryButton label="Add to Cart" onClick={handleAddToCart}/>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 lg:w-4/5 mx-auto" />
      <div className="lg:w-4/5 mx-auto">
        <h2>
          {productReviews.length < 2
            ? productReviews.length + " Review"
            : productReviews.length + " Reviews"}
        </h2>
       
        {productReviews.map((item) => (
          <div className="my-5" key={item.id}>
            <div className="flex items-center">
            <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="#ffca3a" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.971 4.971 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.023 4.023 0 0 0 7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8" clipRule="evenodd"></path></svg></span>
            {item.username}</div>
            <p>Rating: <span className="text-primary">{item.rating}/5</span></p>
            <p className="italic text-center">"{item.description}"</p>
          </div>
          
        ))}    
      </div>
      </div>
      
    </section>
  );
}

export default SingleProduct;
