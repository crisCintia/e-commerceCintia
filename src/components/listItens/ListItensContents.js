import React from "react";
import Itens from "./Itens";

import imagem from "../imagem/batom.png";

// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    return(
    <div>
    <h1>Eu sou uma lista de itens</h1>
    <Itens imagem = {imagem} produto= "Batom" descricao="Batom vermelho" preco="R$ 30,00"/> 
    
    </div>
    
    )
}
export default ListItensContent