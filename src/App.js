import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/Navbar.css';
import ListItensContents from './components/listItens/ListItensContents';
import ItemDetailsContainer from './components/datails/ItemDetailsContainer';
import "./styles/itemListDetails.css"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import NavBarCarrinho from './components/navbar/NavBarCarrinho';
import NavBarLogin from './components/navbar/NavBarCarrinho';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ListItensContents/>}/>;
          <Route exact path="/category/:categoryId" element={<ListItensContents />}/>;
          <Route exact path="/cart" element={<p>"página do meu carrinho"</p> }/>;
          <Route exact path="/item/:itemId" element={<ItemDetailsContainer />}/>;
          <Route exact path="/cart" element={<NavBarCarrinho/>}/>;
          <Route exact path="/cart" element={<NavBarLogin/>}/>;
          <Route exact path="/*" element={<p>"Página não encontrada"</p>}/>
        </Routes>
        <section>
        
        
          
        </section>
        
        
    </div>
    </BrowserRouter>
    
      
  );
}

export default App;
