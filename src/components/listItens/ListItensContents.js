import React from "react";
import Itens from "./Itens";
import imagem from "../imagem/batom.png";
import CountItens from "./CountItens";

// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    return(
        <>
         <div className="container">
    
    <ul className="itensContent" >
        <li><Itens imagem = {imagem} produto= "Batom" descricao="Batom vermelho" preco="R$ 30,00"/><CountItens initial="1" stock="5"/>  </li>
        <li> <Itens imagem = {imagem} produto= "Himel" descricao="Himel vermelho" preco="R$ 30,00" /> <CountItens initial="1"stock="5"/>  </li>
      
    </ul>
    
    </div>
    
        </>
   
   
    )
}
export default ListItensContent