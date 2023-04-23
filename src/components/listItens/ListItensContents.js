import React from "react";
import Itens from "./Itens";



// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    return(
    <div>
    <h1>Eu sou uma lista de itens</h1>
    <Itens  produto= "Batom" descricao="Batom vermelho" preco="R$ 30,00"/> 
    
    </div>
    
    )
}
export default ListItensContent