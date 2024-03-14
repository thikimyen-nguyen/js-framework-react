import { useParams } from "react-router-dom";
import useProductsStore from "../../../store/products";
import { useEffect } from "react";
import ErrorHandling from "../../ErrorHandle";
import Loader from "../../Loader";
import { PrimaryButton } from "../../Buttons";

function SingleProduct() {
  const { singleProduct, isError, isLoading, fetchProductById } =
    useProductsStore();

  let { id } = useParams();
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

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
          <div className="md:flex-1 w-80 mx-auto">
            <img
              src={singleProduct?.image?.url}
              alt={singleProduct?.title}
              className="w-80"
            />
          </div>
          <div className="w-full px-6 md:flex-1">
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
            <div className="text-center my-5">
              <PrimaryButton label="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
