import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import CheckoutForm from '../CheckOutForm/CheckoutForm';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './Checkout.css';

const Checkout = () => {
    const { cart, cartTotalPrice, clearCart } = useCart(); 
    const [orderId, setOrderId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOrderCreation = async (userData) => {
        if (cart.length === 0) {
            setErrorMessage('El carrito está vacío. No se puede crear una orden.');
            return;
        }

        const order = {
            buyer: userData,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price
            })),
            total: cartTotalPrice || 0,
            date: Timestamp.fromDate(new Date())
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden: ", error);
            setErrorMessage('Ocurrió un error al crear la orden. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {orderId ? (
                <div>
                    <h3>¡Orden creada exitosamente!</h3>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : (
                <>
                    <CheckoutForm onSubmit={handleOrderCreation} />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </>
            )}
        </div>
    );
};

export default Checkout;