import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useStoreContext = () => {
    return useContext(StoreContext);
  };  

const [state, dispatch] = useProductReducer({
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: ''
});  

export { StoreProvider, useStoreContext };