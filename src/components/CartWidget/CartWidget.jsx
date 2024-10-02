import React from 'react';
import { useCart } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useCart();

  // Verificar que cartItems sea un arreglo
  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  return (
    <div className="cart-widget">
      {totalItems > 0 && (
        <NavLink to="/cart" aria-label="Ir al carrito">
          <div className="cart-container">
            <span role="img" aria-label="carrito" aria-hidden="true">🛒</span>
            <span className="item-count">{totalItems}</span>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default CartWidget;