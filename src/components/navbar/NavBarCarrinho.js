import { useContext, useEffect, useState } from "react";
import {BiShoppingBag} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Cart, useCartContext } from "../../contexts/CartContext";
import CartItem from "../cart/Cart";
import { useParams } from "react-router-dom";

function NavBarCarrinho(){
    //const valorCart = useContext(Cart);
    const valor = useCartContext();
    console.log(valor)

    let qdtProdutos = 0
    valor.itens.forEach(p => qdtProdutos += p.ammount);

    return(        
        <Link to="/cart">
            <div className="carrinho">{qdtProdutos}</div>
            <BiShoppingBag className="carrinho"/> 
        </Link>   
    )
}
export default NavBarCarrinho

export function Carrinho(cardItem) {
    //const valor = useCartContext();
    const {itens, getItemQtd, clear, removeCart} = useCartContext();
    const [myDetails, setMyDetails]=useState([])
    const [loading, setLoading]=useState(true)
    const {itemId}=useParams()

    function getProductsDetails(){
        return new Promise( (resolve, rejected)=>{
             resolve(CartItem.find(p=>p.id ===parseInt(itemId)));
         })
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProductsDetails()
              .then(result => setMyDetails(result))
        setLoading(false)
        }, 2000)
    })

    return(
        <div>
            <CartItem cardItem= {myDetails}/> 
            <div>Quantidade é {getItemQtd()}</div>
            <ul>
                {itens.map(p => <li key={p.id}>p.ammount</li>)}
            </ul>

            <button className="buyButton btn btn-primary" onClick={() => removeCart()}>Remover Item</button>

            <Link><button className="buyButton btn btn-primary" onClick={() => clear()}>Esvaziar o Carrinho</button></Link>
        </div>
    )
}