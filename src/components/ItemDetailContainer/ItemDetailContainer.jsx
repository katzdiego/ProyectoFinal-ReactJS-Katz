import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const productDoc = doc(db, "products", productId);
                const productSnapshot = await getDoc(productDoc);

                if (productSnapshot.exists()) {
                    setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    setError('Producto no encontrado.');
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
                setError("Error al obtener el producto.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

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