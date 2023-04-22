function  menu ( {categoria , link}){
    return(
           <ul className="menuContens">
            <li className="menuItens">
            <a className="menuLink"   href={link}>{categoria}</a>  
            </li>
            
           </ul>
    )
}
export default menu