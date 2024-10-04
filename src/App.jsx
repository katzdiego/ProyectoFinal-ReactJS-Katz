import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './Context/CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <div className="App">
      <CartProvider value={{ cart, addToCart }}>
        <NavBar />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={'Productos por categoría'} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/counter" element={
              <ItemCount 
                initial={1} 
                stock={10} 
                onAdd={(quantity) => addToCart({ id: 1, name: 'Item name' }, quantity)}
              />
            } />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="*" element={
              <div>
                <h2>404 - Página no encontrada</h2>
                <button onClick={() => window.location.href = '/'}>Ir a la página principal</button>
              </div>
            } />
          </Routes>
          <CartWidget />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;