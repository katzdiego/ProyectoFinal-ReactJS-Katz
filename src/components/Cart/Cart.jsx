import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, clearCart, removeItemFromCart } = useCart();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <p><strong>{item.name}</strong></p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por unidad: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.quantity}</p>

                                    <button onClick={() => removeItemFromCart(item)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${totalPrice.toFixed(2)}</h3>

                  
                    <button onClick={clearCart} className="clear-cart-btn">Limpiar Carrito</button>

                    <Link to="/checkout" className="checkout-link">
                        <button className="checkout-btn">Ir a Checkout</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;