import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products = [] }) => {
    return (
        <div className='ListGroup'>
            {products.length > 0 ? (
                products.map(prod => <Item key={prod.id} {...prod} />)
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default ItemList;