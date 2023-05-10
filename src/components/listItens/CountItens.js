import React,{useState} from "react";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";

function CountItens({stock="10",initial="1",onAdd}){
       
    const [itensNumber, setIntensNumber]=useState(1)
    
    return(
     
        <div className="countItens"> 
        <div className="countItensContainer" >
        {itensNumber<=1?<BsDashSquare/>:<BsDashSquare  className= "dashButton" onClick={()=>{setIntensNumber(anterior=>anterior-1)}}/>}
         <input className="inputNumber" type="text" value= {itensNumber} />
        <BsPlusSquare className= "plusButton"  onClick={()=>{if( itensNumber < stock ){setIntensNumber(anterior=>anterior+1)}}}/>
        </div>     
                     
        <button className="addButton"  onClick={()=>{
               alert(itensNumber + " Produto(s) adicionado ao carrinho")
        }}>Adicionar ao carrinho </button>
        </div>
    )
}
export default CountItens
