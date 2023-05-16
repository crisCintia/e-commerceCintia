import React from "react";


function Itens({ item }) {
    return (
    
           <div className="itemContainer">
                <li className="cardItemList">
                <div className="cardItem">
                    <img src= {item.imagem} className="card-img-top cardImage" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.nome}</h5>
                            <p className="card-text">{item.descricao}</p>
                            <p> R$ {item.preco}</p>
                            <a href="#" class="btn btn-primary">Detalhes</a>
                        </div>
                </div>
                </li>
            </div>
    )
}
export default Itens
