import React from "react";
import CountItens from "../listItens/CountItens";


function ItemDetails({cardItem}){

    return(
        <section >
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" >
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={cardItem.imagem}
              class="img-fluid"
              alt="Laptop" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark">{cardItem.nome}</a></p>
            
              </div>
              
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">{cardItem.preço}</a></p>
             
            </div>
         
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
       
              <button type="button" class="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CountItens/>
</section>

    )
}

export default ItemDetails