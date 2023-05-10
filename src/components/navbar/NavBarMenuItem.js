import { Link } from "react-router-dom"


function NavBarMenuItem ( {categoria , link}){
    return(
           
            
            <Link className="menuLink"  to={link}>{categoria}</Link>  
           
    )
}
export default NavBarMenuItem