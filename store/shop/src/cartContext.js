import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the context
const cartContext = createContext();

// Create a hook to use the context
export const useCart = () => {
  return useContext(cartContext);
};

// Initial state for the cart
const initialState = {
  cart: [],
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.title === action.title
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (title: ${action.title}) as it's not in the cart!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

// CartProvider component to wrap the app with the context provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add any additional side effect logic here
  useEffect(() => {
    // For example, you might want to save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state]);

  // Provide the context value to the children
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
