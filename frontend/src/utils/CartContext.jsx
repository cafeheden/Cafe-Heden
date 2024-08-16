import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create the CartContext
const CartContext = createContext();

// Cart reducer to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!action.payload || !action.payload.id) {
        console.error('Invalid payload or missing id:', action.payload);
        return state;
      }

      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.quantity,
        };
      }

    case "UPDATE_QUANTITY":
      if (!action.payload || !action.payload.id || action.payload.quantity === undefined) {
        console.error('Invalid payload for quantity update:', action.payload);
        return state;
      }

      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = action.payload.quantity;
          return newQuantity > 0
            ? { ...item, quantity: newQuantity }
            : null; // Set to null for removal
        }
        return item;
      }).filter(item => item !== null); // Remove null items

      // Update total amount based on updated items
      const newTotalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

    case "REMOVE_ITEM":
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!itemToRemove) {
        return state;
      }

      const updatedItemsAfterRemoval = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        items: updatedItemsAfterRemoval,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        totalAmount: 0,
      };

    case "SET_CUSTOMER_DETAILS":
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
};

// Initial state for the cart
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("cartTotalAmount")) || 0,
  customer: {
    name: "",
    phoneNumber: "",
  }
};

// CartProvider component that wraps the children with CartContext
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
    localStorage.setItem("cartTotalAmount", JSON.stringify(state.totalAmount));
  }, [state.items, state.totalAmount]);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setCustomerDetails = (customer) => {
    dispatch({ type: "SET_CUSTOMER_DETAILS", payload: customer})
  };

  const getTotalAmount = () => {
    return state.totalAmount;
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        customer: state.customer,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        setCustomerDetails,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
