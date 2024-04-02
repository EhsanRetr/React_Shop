import React, { useContext } from 'react'
import "./product-display.css"
import Relatedproducts from '../relatedproducts/relatedproducts';
import { Shopcontext } from '../../containers/context/shopcontext';
const Productdisplay = (props) => {
    const {Productpage} = props;
    const {addtocart} = useContext(Shopcontext)
  return (
    <>
    <div className="productdisplay">
    <div className='product-displayleft'>
        <div className="productimage">
    <img className='productimg' src={Productpage.image} alt=''/>
    </div>
    </div>
    <div className="product-displayright">
        <h1>{Productpage.name}</h1>
        <h3>${Productpage.price}</h3>
        <button onClick={()=>{addtocart(Productpage.id)}}>اضافه به سبد خرید</button>
    </div>  
    </div>
    <Relatedproducts/>
    </>
  )
}

export default Productdisplay