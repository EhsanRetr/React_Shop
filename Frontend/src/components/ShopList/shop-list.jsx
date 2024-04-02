import React from 'react'
import Imagelist from "../assets/data"
import Products from "../products/products"
import "./shop-list.css"
export const Shoplist = () => {
  return (
    <>
      <div className='shop-list'>
        {Imagelist.map((items,i)=>{
            return <Products key={i} id={items.id} image={items.image} name={items.name}   price={items.price}/>
        })}
      </div>
      
    </>
  )
}
export default Shoplist