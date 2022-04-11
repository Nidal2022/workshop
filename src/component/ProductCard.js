
export function ProductCard({prod,cbf2}) {
    console.log(prod)
    return (
       
<div class="card">
  <img src={prod.img} class="card-img-top" alt="Fissure in Sandstone" width={400}/>
  <div class="card-body">
    <h5 class="card-title">{prod.nom}</h5>
    <p class="card-text">{prod.ref}</p>
    <p class="card-text">{prod.categorie}</p>
    <button  class="btn btn-primary"onClick={()=>cbf2(prod.prix)}>Button</button>
  </div>
</div>
       
    )
    
}