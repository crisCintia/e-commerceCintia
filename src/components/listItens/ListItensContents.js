import React from "react";
import Itens from "./Itens";
/*import imagem from "../imagem/batom.png";*/
import batom from "../assets/images/batom.png";
import rimel from "../assets/images/rimel.jpg";
import base from "../assets/images/base.jpg";
import blush from "../assets/images/blush.jpg";
import sombra from "../assets/images/sombra.png";
import CountItens from "./CountItens";

// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    return(
        <>
         <div className="container">
    
    <ul className="itensContent" >
        <li><Itens imagem = {batom} produto= "Batom Liquido" descricao="Batom Liquido Matte Blazing, Mari Maria, cor Vermelho" preco="R$ 30,00"/><CountItens initial="1" stock="5"/></li>
        <li><Itens imagem = {rimel} produto= "Máscara de Cílios" descricao="Máscara de Cílios Big No Panda Vizzela 5g Pincel Big Panda" preco="R$ 40,48" /> <CountItens initial="1"stock="5"/></li>
        <li><Itens imagem = {base} produto= "Base Líquida" descricao="Base Líquida BT Skin - Bruna Tavares, cor L30" preco="R$ 62,20" /> <CountItens initial="1"stock="5"/></li>
        <li><Itens imagem = {blush} produto= "Blush" descricao="Blush Compacto Melu, Rubyrose, cor Rosa Claro" preco="R$ 20,50" /> <CountItens initial="1"stock="5"/></li>
        <li><Itens imagem = {sombra} produto= "Paleta de Sombra" descricao="Paleta de Sombras 9 Shades - Mariana Saad by Océane" preco="R$ 98,00" /> <CountItens initial="1"stock="5"/></li>
      
    </ul>
    
    </div>
    
        </>
   
   
    )
}
export default ListItensContent
