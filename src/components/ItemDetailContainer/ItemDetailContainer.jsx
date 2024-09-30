import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productId } = useParams(); // Cambiado de id a productId

    useEffect(() => {
        setLoading(true);
        setError(null);
        getProductById(productId) // Cambiado de id a productId
            .then(response => {
                setProduct(response);
                setLoading(false);
            })
            .catch(error => {
                setError("Error al obtener el producto.");
                setLoading(false);
                console.error("Error al obtener el producto:", error);
            });
    }, [productId]); // Cambiado de id a productId

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <ItemDetail {...product} />
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;