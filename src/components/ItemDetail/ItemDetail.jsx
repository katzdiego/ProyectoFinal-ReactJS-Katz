import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, name, description, price, stock, image }) => {
    const { addItemToCart, isInCart } = useCart();

    const handleAddToCart = (quantity) => {
        if (quantity <= stock) {
            addItemToCart({ id, name, price, stock, quantity });
        } else {
            console.error(`No se puede agregar más de ${stock} unidades de ${name}`);
        }
    };

    return (
        <div className="item-detail">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            {isInCart({ id }) ? (
                <p>Producto ya en el carrito</p>
            ) : (
                <ItemCount 
                    initial={1} 
                    stock={stock} 
                    onAdd={handleAddToCart}
                />
            )}
        </div>
    );
};

export default ItemDetail;