import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItemToCart } = useCart();

    const handleAdd = (quantity) => {
        const item = { id, name, price };
        setQuantityAdded(quantity);
        addItemToCart({ ...item, quantity });
        console.log('Cantidad agregada:', quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info">Precio: ${price}</p>
                {quantityAdded > 0 && <p className="Info">Cantidad agregada: {quantityAdded}</p>}
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <ItemCount 
                        initial={1} 
                        stock={stock} 
                        onAdd={handleAdd}
                    />
                ) : (
                    <Link to="/cart" className="Option">
                        Ir al carrito
                    </Link>
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;