import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addToCart } = useCart();

    const handleAdd = (quantity) => {
        const item = { id, name, price, stock };
        setQuantityAdded(quantity); 
        addToCart(item, quantity);
        console.log('Cantidad agregada:', quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name || "Producto sin nombre"}</h2>
            </header>
            <picture>
                <img 
                    src={img || "/path/to/default-image.jpg"}
                    alt={name || "Imagen no disponible"} 
                    className="ItemImg" 
                />
            </picture>
            <section>
                <p className="Info">Categoría: {category || "Sin categoría"}</p>
                <p className="Info">Descripción: {description || "Sin descripción disponible"}</p>
                <p className="Info">Precio: {price != null ? `$${price}` : "No disponible"}</p>
                <p className="Info">Stock disponible: {stock > 0 ? stock : "Sin stock disponible"}</p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Option">
                        Ir al carrito
                    </Link>
                ) : (
                    stock > 0 ? (
                        <ItemCount 
                            initial={1} 
                            stock={stock} 
                            onAdd={handleAdd}
                        />
                    ) : (
                        <p className="out-of-stock">Producto sin stock</p>
                    )
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;