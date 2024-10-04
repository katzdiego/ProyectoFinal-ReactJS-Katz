import { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button 
                    className='Button' 
                    onClick={decrement} 
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <h4 className='Number'>{quantity}</h4>
                <button 
                    className='Button' 
                    onClick={increment} 
                    aria-label="Increase quantity"
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>
            <div>
                <button
                    className='Button'
                    onClick={() => onAdd(quantity)}
                    disabled={stock === 0 || quantity > stock || quantity <= 0}
                    aria-label={`Add ${quantity} items to cart`}
                >
                    Agregar al carrito
                </button>
                {stock === 0 && <p style={{ color: 'red' }}>Out of stock</p>}
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;