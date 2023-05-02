import React,{useState} from "react";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";

function CountItens({stock,initial,onAdd}){
       
    const [itensNumber, setIntensNumber]=useState(1)
    
    return(
     
        <div className="countItens"> 
        <div className="countItensContainer" >
        {itensNumber<=1?<BsDashSquare/>:<BsDashSquare  className= "dashButton" onClick={()=>{setIntensNumber(anterior=>anterior-1)}} />}
         <input className="inputNumber" type="text" value= {itensNumber} />
        <BsPlusSquare className= "plusButton"  onClick={()=>{setIntensNumber(anterior=>anterior+1)}}/>
        </div>     
                     
        <button className="addButton"  onClick={()=>{
          
        }}>Adicionar ao carrinho </button>
        </div>
    )
}
export default CountItens