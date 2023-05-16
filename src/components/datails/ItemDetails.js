import React from "react";
import CountItens from "../listItens/CountItens";
import { Link } from "react-router-dom";


function ItemDetails({cardItem}){
    return(
        <div className="container  cardDetailsContainer">
        <div className="cardDetailImageContent" >
            <img src={cardItem.imagem} className=" cardDetailsImage" alt="Laptop" /><a href=""></a>
        </div>
        <div className="cardDetailsItensContent">
            <p><a href="#!" className= "cardDetailsImage text-dark">{cardItem.nome}</a></p>
            <p>R$ <a href="#!" className=" CardDetailsNome ">{cardItem.preco}</a></p>7
            <p> Descrição do produto: {cardItem.descricao}</p>
            <CountItens/>
              <button type="button" className=" buyButton btn btn-primary">Comprar</button>
         </div>
         </div>
    )
}

export default ItemDetails
