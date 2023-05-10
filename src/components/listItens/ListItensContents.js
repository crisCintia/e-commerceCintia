import React,{useState,useEffect} from "react";
import { produtos } from "./mock/produtos";
import ListItens from "./ListItens";
import { useParams } from "react-router-dom";


// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    const[loading, setLoading]= useState (true)
    const[allMyProducts,setAllMyProducts]=useState([])
    const[filteredProducts, setFilteredProducts]=useState([])
    const {categoryId} = useParams()
    
   


    function getProdutos(){
        return new Promise( (resolve, rejected) =>{

            resolve(produtos)

        })
    }
    useEffect(
        ()=>{
            setTimeout(()=>{
                getProdutos()
                      .then(result => {setAllMyProducts(result);setFilteredProducts(result)})
                     setLoading(false)
            },2000);
            
         
        },[]
    )
    useEffect(
        ()=>{
            if(categoryId){
                setFilteredProducts(allMyProducts.filter(p => p.categoryId===categoryId))
            }else{
                setFilteredProducts(allMyProducts)
            }
            
            

        },[categoryId]  
    );
    
    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        
    }

    return(
        
        <div className="itemContainerList">
          
           <ListItens itens ={filteredProducts}/>
        </div>
       
    )
}
export default ListItensContent

