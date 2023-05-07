import React,{useState,useEffect} from "react";

import { productsDetails } from "./mockDetails/productsDetails";
import ItemDetails from "./ItemDetails";


function ItemListDetails(){
     const [myDetails, setMyDetails]=useState([])
    function getProductsDetails(){

       return new Promise( (resolve, rejected)=>{

            resolve(productsDetails)
            console.log("🚀 ~ file: ItemListDetails.js:15 ~ returnnewPromise ~ productsDetails:", productsDetails)

        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProductsDetails()
              .then(result => setMyDetails(result))
        }, 2000)

    })
    return(

       myDetails.map(element =><p><ItemDetails cardItem= {element}/></p> )

    )
}
export default ItemListDetails