
import React from 'react';
import NavBarLogin from './NavBarLogin';
import NavBarBusca from './NavBarBusca';
import NavBarCarrinho from './NavBarCarrinho';
import NavBarMenuItem from './NavBarMenuItem';

function NavBar( ) {
    return (
        <nav>
            <div className="container">
            <NavBarLogin/>
            <h1 className="logo"><a className='menuLink' href='#'>Nome da marca</a></h1>
            <NavBarBusca/>
            <NavBarCarrinho/>            
            </div>
            <div className='menuBar'>
                <ul className='menuContents'>
                    <li className='menuItens'> <NavBarMenuItem categoria ="TODOS OS PRODUTOS" link ="https://plataforma-login.coderhouse.com/"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="LÁBIOS" link ="https://plataforma-login.coderhouse.com/"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="FACE" link ="https://plataforma-login.coderhouse.com/"/></li>
                    <li className='menuItens'> <NavBarMenuItem categoria ="OLHOS" link ="https://plataforma-login.coderhouse.com/"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="SKINCARE" link ="https://plataforma-login.coderhouse.com/"/></li>
                </ul>
            
            </div>
           

        </nav>

    )


}
export default NavBar