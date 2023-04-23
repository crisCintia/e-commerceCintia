import React from "react";

function Itens({ imagem, produto, descricao,preco}) {
    return (

        <ul>
            <li>
                 <img src = {imagem}  alt="batom"/>
                <p>Produto:{produto}</p>
                <p>Descrição:{descricao}</p>
                <p>Preço:{preco}</p>
            </li>
        </ul>


    )

}
export default Itens