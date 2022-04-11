import React from 'react'
import { ProductCard } from './ProductCard';

const ListProduct = ({produits,cbf}) => {
    console.log(produits);
  return (
    <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap" }}>{produits.map((el,i)=>
        <ProductCard prod={el} cbf2={cbf}/>
        )}</div>
  )
}

export default ListProduct