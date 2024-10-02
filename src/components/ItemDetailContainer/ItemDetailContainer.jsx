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
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getProductById(productId);
                if (response) {
                    setProduct(response);
                } else {
                    setError("Producto no encontrado.");
                }
            } catch (error) {
                setError("Error al obtener el producto.");
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = (quantity) => {
        if (product) {
            if (quantity <= product.stock) {
                addItemToCart({ ...product, quantity });
            } else {
                console.error(`No se puede agregar más de ${product.stock} unidades de ${product.name}`);
            }
        }
    };

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
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