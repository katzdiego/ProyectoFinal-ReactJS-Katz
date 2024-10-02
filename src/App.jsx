import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={'Productos por categoría'} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/counter" element={
            <ItemCount 
              initial={1} 
              stock={10} 
              onAdd={(quantity) => console.log('Añadir al carrito:', quantity)}
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