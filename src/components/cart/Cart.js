import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import CountItens from "../listItens/CountItens";
import { productsDetails } from "../datails/mockDetails/productsDetails";


function CartItem({ }) {
    const { itens, setItens, getItemQtd, clear, removeCart,sumTotal } = useCartContext();
    const [ammount, setAmmount] = useState(1);

    function ClickOnChangeQtd(qtd){
        setAmmount(qtd);
    }

    const cart = productsDetails.map(p => ({
        id:p.id,
        nome: p.nome,
        imagem: p.imagem,
        preco: p.preco,
        qtd: p.qtd,
        subTotal: p.qtd * p.preco
    }))

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={cart.imagem} className=" cardDetailsImage" alt="Laptop" />
            </div>
            <div className="cardDetailsItensContent">
                <p>{cart.nome}</p>
                <p className=" CardDetailsNome ">R$ {cart.preco}</p>
                <p>Quantidade:  {getItemQtd()}</p>
                {/*<CountItens stock={cardItem.estoque} qtd={ammount} onChangeQtd={ClickOnChangeQtd}><p>{getItemQtd()}</p></CountItens>*/}
                <p>Valor Total: R$ {sumTotal}</p>
                <button className="buyButton btn btn-primary" onClick={() => removeCart()}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
