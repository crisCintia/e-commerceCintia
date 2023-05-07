import React,{useState,useEffect} from "react";
import { produtos } from "./mock/produtos";
import ListItens from "./ListItens";


// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    const[loading, setLoading]= useState (true)
    const[myproducts,setMyProducts]=useState([])

    function getProdutos(){
        return new Promise( (resolve, rejected) =>{

            resolve(produtos)

        })
    }
    useEffect(
        ()=>{
            setTimeout(()=>{
                getProdutos()
                      .then(result => setMyProducts(result))
                     setLoading(false)
            },2000);
            
         
        },[]
    )
    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        
    }

    return(
        <div className="itemContainerList">
           <ListItens itens ={myproducts}/>
        </div>
       
    )
}
export default ListItensContent

