import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useCart } from '../../Context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productId } = useParams();
    const { addItemToCart } = useCart();

    useEffect(() => {
        setLoading(true);
        setError(null);
        getProductById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                setError("Error al obtener el producto.");
                console.error("Error al obtener el producto:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    const handleAddToCart = (quantity) => {
        if (product) {
            addItemToCart({ ...product, quantity });
        }
    };

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <ItemDetail 
                    {...product} 
                    onAdd={handleAddToCart}
                />
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;