import {CiUser} from "react-icons/ci";


function NavBarLogin(){

    return(
        <div className="login">
               <CiUser className="loginIcon"/>
               <p className="LoginText">Olá! faça seu login ou cadastre-se</p>
        </div>
    )
}
export default NavBarLogin