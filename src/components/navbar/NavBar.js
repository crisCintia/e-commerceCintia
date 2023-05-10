
import React from 'react';
import NavBarLogin from './NavBarLogin';
import NavBarBusca from './NavBarBusca';
import NavBarCarrinho from './NavBarCarrinho';
import NavBarMenuItem from './NavBarMenuItem';
import { Link } from 'react-router-dom';


function NavBar( ) {
    return (
        <nav>
            <div className="container">
            <NavBarLogin/>
            <span class="material-symbols-outlined"></span>
            <h1 className="logo"><Link className='menuLink' to='/'>Coder MakeUp</Link></h1>
            <NavBarBusca/>
            <NavBarCarrinho/>            
            </div>
            <div className='menuBar'>
                <ul className='menuContents'>
                    <li className='menuItens'> <NavBarMenuItem categoria ="TODOS OS PRODUTOS" link="/"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="LÁBIOS" link ="/category/labios"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="FACE" link ="/category/face"/></li>
                    <li className='menuItens'> <NavBarMenuItem categoria ="OLHOS" link ="/category/olhos"/></li>
                    <li className='menuItens'><NavBarMenuItem categoria ="SKINCARE" link ="/category/skincare"/></li>
                </ul>
            
            </div>
        
        </nav>

    )


}
export default NavBar