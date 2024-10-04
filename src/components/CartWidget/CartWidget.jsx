import React from 'react';
import { useCart } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cartTotalItems } = useCart();

  const validTotalItems = typeof cartTotalItems === 'number' && !isNaN(cartTotalItems) ? cartTotalItems : 0;

  if (validTotalItems === 0) {
    return null;
  }

  return (
    <div className="cart-widget">
      <NavLink to="/cart" aria-label={`Tienes ${validTotalItems} artículos en tu carrito`}>
        <div className="cart-container">
          <span role="img" aria-hidden="true">🛒</span>
          <span className="item-count" aria-label={`Cantidad de artículos en el carrito: ${validTotalItems}`}>
            {validTotalItems}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default CartWidget;