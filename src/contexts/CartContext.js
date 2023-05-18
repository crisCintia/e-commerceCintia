import { createContext, useContext } from "react";
import ItemDetails from "../components/datails/ItemDetails";

export const CartContext = createContext([]);

//const carrinho = useContext(ItemDetails)
//carrinho.forEach(p => p.cardItem)
//console.log(carrinho)


/*import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { CartCarrinho } from "./UserContext";

//export default function CartContext() {
//    const usuario = useContext(UserContext)
//    return (<div>O usuário logado é: {usuario}</div>)
//}

export default function Carrinho() {
    const carrinho = useContext(CartCarrinho)
    return (<div>Qtd no carrinho</div>)
}*/

