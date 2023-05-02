import {BiSearch} from "react-icons/bi";


function NavBarBusca(){
    return(
          <div className="busca">
            
            <input type="text" id="pesquisar" placeholder="Pesquise"></input>
            <BiSearch className="lupa"/>

          </div>
    )
}
export default NavBarBusca