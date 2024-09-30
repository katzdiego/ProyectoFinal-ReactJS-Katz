import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      if (existingItem.quantity < item.stock) {
        setCartItems(cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        console.error(`No se puede agregar más del producto "${item.name}". Stock máximo alcanzado.`);
      }
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (item) => {
    return cartItems.some(cartItem => cartItem.id === item.id);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};