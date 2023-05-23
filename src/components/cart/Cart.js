import React, { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";



function CartItem({ cardItem }) {
    const { itens, getItemQtd, clear, removeCart } = useCartContext();

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem.imagem} className=" cardDetailsImage" alt="Laptop" /><a href=""></a>
            </div>
            <div className="cardDetailsItensContent">
                <p>{cardItem.nome}</p>
                <p className=" CardDetailsNome ">R$ {cardItem.preco}</p>
                <p>Quantidade:  {getItemQtd()}</p>
                <ul>
                    {itens.map(p => <li key={p.id}>p.ammount</li>)}
                </ul>
            </div>
        </div>
    )
}

export default CartItem
