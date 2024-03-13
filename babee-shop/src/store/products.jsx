import { create } from 'zustand';


const useProductsStore = create((set) => ({
  
  products: [],
  isLoading: false,
  isError: false,
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
  }
  
}));

export default useProductsStore;

