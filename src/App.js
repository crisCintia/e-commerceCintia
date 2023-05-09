import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/Navbar.css';
import ListItensContents from './components/listItens/ListItensContents';
import ItemDetailsContainer from './components/datails/ItemDetailsContainer';
import "./styles/itemListDetails.css"
import { BrowserRouter, Router,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <section>
        <ListItensContents/>
        <ItemDetailsContainer idProdutos={1}/>
          
        </section>
        
        
    </div>
      
  );
}

export default App;
