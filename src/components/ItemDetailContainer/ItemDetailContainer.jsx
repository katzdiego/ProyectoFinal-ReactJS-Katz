import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);
        getProductById(id)
            .then(response => {
                setProduct(response);
                setLoading(false);
            })
            .catch(error => {
                setError("Error al obtener el producto.");
                setLoading(false);
                console.error("Error al obtener el producto:", error);
            });
    }, [id]);

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