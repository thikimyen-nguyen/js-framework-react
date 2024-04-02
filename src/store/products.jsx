import { create } from "zustand";
import { allProductsUrl } from "../api";

const useProductsStore = create((set) => ({
  products: [],
  singleProduct: {},
  isLoading: false,
  isError: false,
  productReviews: [],
  cart: [],
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
      set((state) => ({ ...state, productReviews: json.data.reviews}));
      localStorage.setItem('currentProduct', JSON.stringify(json.data));

    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
  addToCart: (product) => {
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (currentProduct) => product.id === currentProduct.id,
      );
  
      let updatedCart;
  
      if (existingProductIndex !== -1) {
        updatedCart = [...state.cart];
        // Increment quantity of the existing product in the cart
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // Add a new product to the cart with quantity 1
        updatedCart = [...state.cart, { id: product.id, title: product.title, quantity: 1 }];
      }
  
      // Update local storage with the updated cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      console.log(updatedCart);
      
      return { cart: updatedCart };
    });
  },

        

  
  
  
  
}));

export default useProductsStore;
