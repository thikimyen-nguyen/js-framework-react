import { create } from "zustand";
import { allProductsUrl } from "../api";

const useProductsStore = create((set) => ({
  products: [],
  singleProduct: {},
  isLoading: false,
  isError: false,
  productReviews: [],
  fetchProducts: async (url) => {
    set({ isLoading: true, isError: false });
    try {
      const response = await fetch(url);
      const json = await response.json();
      set({ products: json.data });
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
      set({ singleProduct: json.data });
      set({ productReviews: json.data.reviews})
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductsStore;
