import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, removeFromCart } = useCart();

    console.log("Contenido del carrito:", cart);

    const totalPrice = cart.reduce((acc, item) => {
        const itemPrice = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
        const itemQuantity = typeof item.quantity === 'number' && !isNaN(item.quantity) && item.quantity > 0 ? item.quantity : 1;
        const itemSubtotal = itemPrice * itemQuantity;
        console.log(`Producto: ${item.name}, Precio: ${itemPrice}, Cantidad: ${itemQuantity}, Subtotal: ${itemSubtotal}`);
        return acc + itemSubtotal;
    }, 0);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {cart.length === 0 ? (
                <div>
                    <p>Tu carrito está vacío.</p>
                    <Link to="/" className="go-back-btn">Volver a la tienda</Link>
                </div>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <p><strong>{item.name}</strong></p>
                                    <p>Cantidad: {typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : "Cantidad no disponible"}</p>
                                    <p>
                                        Precio por unidad: ${typeof item.price === 'number' && !isNaN(item.price) ? item.price.toFixed(2) : "No disponible"}
                                    </p>
                                    <p>
                                        Subtotal: ${typeof item.price === 'number' && !isNaN(item.price) && typeof item.quantity === 'number' && !isNaN(item.quantity) ? (item.price * item.quantity).toFixed(2) : "No disponible"}
                                    </p>

                                    <button 
                                        onClick={() => removeFromCart(item.id)} 
                                        className="remove-item-btn"
                                        aria-label={`Eliminar ${item.name} del carrito`}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${totalPrice.toFixed(2)}</h3>

                    <button 
                        onClick={clearCart} 
                        className="clear-cart-btn"
                        aria-label="Limpiar todo el carrito"
                    >
                        Limpiar Carrito
                    </button>

                    <Link to="/checkout" className="checkout-btn">
                        Ir al Checkout
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;