import { create } from "zustand";
import { allProductsUrl } from "../api";
const getInitialCartState = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const useProductsStore = create((set, get) => ({
  products: [],
  singleProduct: {},
  isLoading: false,
  isError: false,
  productReviews: [],
  cart: getInitialCartState(),
  fetchProducts: async (url) => {
    set({ isLoading: true, isError: false });
    try {
      const response = await fetch(url);
      const json = await response.json();
      set((state) => ({ ...state, products: json.data }));
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchProductById: async (id) => {
    const singleProductUrl = `${allProductsUrl}/${id}`;
    set({ isLoading: true, isError: false });
    try {
      const response = await fetch(singleProductUrl);
      const json = await response.json();
      set((state) => ({ ...state, singleProduct: json.data }));
      set((state) => ({ ...state, productReviews: json.data.reviews }));
      localStorage.setItem("currentProduct", JSON.stringify(json.data));
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
  addToCart: (product) => {
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (currentProduct) => product.id === currentProduct.id
      );

      let updatedCart;

      if (existingProductIndex !== -1) {
        updatedCart = [...state.cart];
        // Increment quantity of the existing product in the cart
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // Add a new product to the cart with quantity 1
        updatedCart = [
          ...state.cart,
          {
            id: product.id,
            title: product.title,
            quantity: 1,
            image: product.image,
            discountedPrice: product.discountedPrice,
          },
        ];
      }

      // Update local storage with the updated cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(updatedCart);

      return { ...state, cart: updatedCart };
    });
  },

  getTotalNumberOfItemsInCart: () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.length : 0;
  },
  getTotalPrice: () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
      return 0;
    }
    return cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0).toFixed(2);
  },
  clearCart: () => {
    set({ cart: [] }); 
    localStorage.removeItem('cart'); 
  },}));

export default useProductsStore;
