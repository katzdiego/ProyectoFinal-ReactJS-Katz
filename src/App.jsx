import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './Context/CartContext';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id 
          ? { ...existingItem, quantity: existingItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    console.log('Cart updated:', cart);
  };

  return (
        <div className="App">
          <CartProvider value={{ cart, addToCart }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={'Productos por categoría'} />} />
            <Route path="/item/:itemId" element={<Cart/>}/>
            <Route path="/counter" element={
              <ItemCount 
                initial={1} 
                stock={10} 
                onAdd={(quantity) => addToCart({ id: 1, name: 'Item name' }, quantity)}
              />
            } />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
          </CartProvider>
        </div>
    
  );
}

export default App;