import { create } from 'zustand';
import { allProductsUrl } from '../api';


const useProductsStore = create((set) => ({
  
  products: [],
  cart: [],
  fetchProducts: async () => {
    const response = await fetch(allProductsUrl);
    const json = await response.json();
    set((state) => ({ ...state, products: json.data }));
    console.log(json.data);
  },
  
}));

export default useProductsStore;
