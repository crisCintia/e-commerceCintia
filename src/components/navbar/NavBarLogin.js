import {CiUser} from "react-icons/ci";
import { Link } from "react-router-dom";


function NavBarLogin(){

    return(
        <div className="login">
               
               <Link className="loginLink" to="/login">
               <CiUser className="loginIcon"/>
                <p className="LoginText">Olá! faça seu login ou cadastre-se</p>
               </Link>
               
        </div>
    )
}
export default NavBarLogin