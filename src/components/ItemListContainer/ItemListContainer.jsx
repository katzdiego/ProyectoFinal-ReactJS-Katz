import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../firebase/db';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getProducts();
                const filteredProducts = idCategory 
                    ? response.filter(product => product.category === idCategory)
                    : response;
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setError('Hubo un problema al cargar los productos');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [idCategory]);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;