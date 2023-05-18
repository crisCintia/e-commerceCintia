import { useContext } from "react";
import {BiShoppingBag} from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";


function NavBarCarrinho(){
    const valor = useContext(CartContext);

    let qdtProdutos = 0
    //valor.forEach(p => qdtProdutos += p.ammount);

    return(        
        <Link to="/cart">
            <div className="carrinho">{qdtProdutos}</div>
            <BiShoppingBag className="carrinho"/> 
        </Link>   
    )
}
export default NavBarCarrinho