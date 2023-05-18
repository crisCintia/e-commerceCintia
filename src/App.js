import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/NavBar.css';
import ListItensContents from './components/listItens/ListItensContents';
import ItemDetailsContainer from './components/datails/ItemDetailsContainer';
import "./styles/itemListDetails.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarCarrinho from './components/navbar/NavBarCarrinho';
import NavBarLogin from './components/navbar/NavBarCarrinho';
import {Cart} from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
    <Cart.Provider value={[{id:1, ammount:5}]}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ListItensContents />} />;
            <Route exact path="/category/:categoryId" element={<ListItensContents />} />;
            <Route exact path="/cart" element={<p>Página do carrinho</p>} />;
            <Route exact path="/item/:itemId" element={<ItemDetailsContainer />} />;
            <Route exact path="/cart" element={<NavBarCarrinho />} />;
            <Route exact path="/cart" element={<NavBarLogin />} />;
            <Route exact path="/*" element={<p>"Página não encontrada"</p>} />
          </Routes>
          <section>
          </section>
        </div>
        </Cart.Provider>
    </BrowserRouter>
  );
}

export default App;