import React from "react";
import CountItens from "../listItens/CountItens";
import { Link } from "react-router-dom";


function ItemDetails({cardItem}){

    return(
       
  <div class="container  cardDetailsContainer">
            
            <div class="cardDetailImageContent" >
            <img src={cardItem.imagem}
              class=" cardDetailsImage"
              alt="Laptop" />
            <a href=""></a>

            </div>
          <div className="cardDetailsItensContent">
        
               <p><a href="#!" className= "cardDetailsImage text-dark">{cardItem.nome}</a></p>
             
               <p><a href="#!" className=" CardDetailsNome ">{cardItem.preço}</a></p>

               <p> Descrição do produto: {cardItem.description}</p>

               <CountItens/>
              <button type="button" className=" buyButton btn btn-primary">Comprar</button>
          </div>
          
          </div>
        
   
  


  


    )
}

export default ItemDetails