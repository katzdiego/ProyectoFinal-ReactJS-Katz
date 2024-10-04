import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

      if (quantity <= 0) {
        console.error("La cantidad debe ser mayor que 0.");
        return prevCart;
      }

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > item.stock) {
          console.error(`No puedes agregar más de ${item.stock} unidades. Ya tienes ${existingItem.quantity} en el carrito.`);
          return prevCart;
        }

        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        );
      } else {
        if (quantity > item.stock) {
          console.error(`No puedes agregar ${quantity} unidades. Solo hay ${item.stock} en stock.`);
          return prevCart;
        }

        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === id);

      if (!existingItem) {
        console.error(`El producto con id "${id}" no está en el carrito.`);
        return prevCart;
      }

      if (existingItem.quantity === 1) {
        return prevCart.filter(cartItem => cartItem.id !== id);
      } else {
        return prevCart.map(cartItem =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some(cartItem => cartItem.id === id);
  };

  const cartTotalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  const cartTotalPrice = cart.reduce((total, item) => {
    const validPrice = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
    const validQuantity = typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 0;
    return total + (validQuantity * validPrice);
  }, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    cartTotalItems,
    cartTotalPrice,
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