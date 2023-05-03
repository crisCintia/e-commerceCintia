import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/Navbar.css';
import ListItensContents from './components/listItens/ListItensContents';




function App() {
  return (
    <div className="App">
        <NavBar/>
        <section>
        <ListItensContents/>
        </section>
        
        
    </div>
      
  );
}

export default App;
