import React from 'react';
import { useCart } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeItemFromCart, clearCart, addItemToCart } = useCart();

    const handleRemove = (item) => {
        removeItemFromCart(item);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleAddQuantity = (item) => {
        addItemToCart(item);
    };

    const handleReduceQuantity = (item) => {
        if (item.quantity > 1) {
            removeItemFromCart(item);
        } else {
            handleRemove(item);
        }
    };

    return (
        <div className="cart">
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleReduceQuantity(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleAddQuantity(item)}>+</button>
                                    </div>
                                    <button onClick={() => handleRemove(item)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleClearCart}>Limpiar Carrito</button>
                    <p>
                        Total: $
                        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;