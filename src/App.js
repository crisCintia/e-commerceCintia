import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/Navbar.css';
import ListItensContents from './components/listItens/ListItensContents';
import ItemListDetails from './components/datails/ItemListDetails';
import "./styles/itemListDetails.css"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <section>
        <ListItensContents/>
        <ItemListDetails/>
          
        </section>
        
        
    </div>
      
  );
}

export default App;
