import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/counter" element={
          <ItemCount 
            initial={1} 
            stock={10} 
            onAdd={(quantity) => console.log('Cantidad agregada', quantity)} 
          />
        } />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;