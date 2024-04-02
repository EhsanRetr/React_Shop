import React, { useContext } from 'react'
import "./products.css"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../containers/context/shopcontext'
export const Products = (props) => {
  const {addtocart} = useContext(Shopcontext)
  return (
    <div className='card'>
        <Link to={`/Productpage/${props.id}`}><img src={props.image} alt=''/></Link>
        <Link className='pricetag' to={`/Productpage/${props.id}`}><p>{props.name}</p></Link>
        <p>${props.price}</p>
        <button onClick={()=>{addtocart(props.id)}}>اضافه به سبد خرید</button>
    </div>

  )
}
export default Products
