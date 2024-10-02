import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!item.id || !item.quantity) {
      console.error('El item debe tener un id y una cantidad.');
      return;
    }

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      if (existingItem.quantity + item.quantity <= item.stock) {
        setCartItems(cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ));
      } else {
        console.error(`No se puede agregar más del producto "${item.name}". Stock máximo alcanzado.`);
      }
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
      } else {
        setCartItems(cartItems.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
      }
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (itemId) => {
    return cartItems.some(cartItem => cartItem.id === itemId);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
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