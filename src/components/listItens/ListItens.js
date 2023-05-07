import React from "react"
import Itens from "./Itens"


function ListItens ({itens}){
    return (itens.map((p)=>
        
        <p><Itens key={p.id} item={p}/></p>
        
        )) 
  
 }
 export default ListItens