import {BiShoppingBag} from "react-icons/bi";
import { Link } from "react-router-dom";


function NavBarCarrinho(){
    return(
        
        <Link to="/cart">
            <BiShoppingBag className="carrinho"/> 
        </Link>   

    )
}
export default NavBarCarrinho