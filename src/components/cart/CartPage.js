import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../cart/Cart";
import { useParams } from "react-router-dom";
import { productsDetails } from "../datails/mockDetails/productsDetails";


function Carrinho(cardItem) {
    //const valor = useCartContext();
    const { itens, setItens, getItemQtd, clear, removeCart } = useCartContext();
    const [loading, setLoading] = useState(true);
    //const [itens, setItens] = useState([]);
    const { itemId } = useParams();


    function getProductsDetails() {
        return new Promise((resolve, rejected) => {
            resolve(productsDetails.find(p => p.id === parseInt(itemId)));
        })
    }

    /*useEffect(()=>{
            getProductsDetails()
              .then(result => setItens(result))
        setLoading(false)
        })*/

    return (
        <div>
            <CartItem cardItem={itens} />
            <div>Quantidade é {getItemQtd()}</div>
            <ul>
                {itens.map(p =>
                    <li key={p.id}>
                        <p>Produto: {p?.id} - Qtd: {p.qtd}</p>
                        <button className="buyButton btn btn-primary" onClick={() => removeCart(p.id)}>Remover Item</button>
                    </li>)}
            </ul>
            <button className="buyButton btn btn-primary" onClick={() => removeCart()}>Remover Item</button>
            <p></p>
            <Link><button className="buyButton btn btn-primary" onClick={() => clear()}>Esvaziar o Carrinho</button></Link>
        </div>
    )
}

export default Carrinho