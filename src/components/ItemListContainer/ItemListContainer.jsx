import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../products';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);
        getProducts()
            .then(response => {
                const filteredProducts = idCategory 
                    ? response.filter(product => product.category === idCategory)
                    : response;
                setProducts(filteredProducts);
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
                setError('Hubo un problema al cargar los productos');
            })
            .finally(() => {
                setLoading(false);
            });
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