function NavBarMenuItem ( {categoria , link}){
    return(
           
            
            <a className="menuLink"   href={link}>{categoria}</a>  
            
            
           
    )
}
export default NavBarMenuItem