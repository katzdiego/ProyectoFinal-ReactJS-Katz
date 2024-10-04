import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name || "Producto sin nombre"}
                </h2>
            </header>
            <picture>
                <img 
                    src={img} 
                    alt={name || "Imagen no disponible"} 
                    className="ItemImg" 
                    onError={(e) => { e.target.src = '/path/to/your-default-image.jpg'; }}
                />
            </picture>
            <section>
                <p className="info">
                    Precio: ${price != null ? price : "No disponible"}
                </p>
                <p className="info">
                    Stock disponible: {stock != null ? stock : "No disponible"}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;