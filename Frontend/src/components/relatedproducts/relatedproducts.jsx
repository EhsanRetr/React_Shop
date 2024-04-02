import React from 'react'
import Related from '../assets/data2'
import Products from '../products/products'
import "./relatedproducts.css"
const Relatedproducts = () => {
  return (
    <>
    <div className="Relatedproducts">
    <h1>Related Carpets</h1>
    <hr/>
    </div>
    <div className="Relateditems">
        {Related.map((item,i)=>{
            return <Products key={i} image={item.image} id={item.id} name={item.name} price={item.price}/> 
        })}
    </div>
    
    </>
  )
}

export default Relatedproducts