import React from "react";

function Itens({ imagem, produto, descricao,preco}) {
    return (

            <div>
                <img className="ImageItem" src = {imagem} alt=""/>
                <p>{produto}</p>
                <p>Descrição:{descricao}</p>
                <p>Preço:{preco}</p>
            </div>
        


    )

}
export default Itens