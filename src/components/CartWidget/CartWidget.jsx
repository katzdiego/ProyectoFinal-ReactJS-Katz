import React from 'react';
import { useCart } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      {totalItems > 0 && (
        <NavLink to="/cart">
          <div>
            <span role="img" aria-label="cart">🛒</span> 
            <span>{totalItems}</span>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default CartWidget;