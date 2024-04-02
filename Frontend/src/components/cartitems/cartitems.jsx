import React, { useContext } from 'react'
import "./cartitems.css"
import { Shopcontext } from '../../containers/context/shopcontext'
import { CiCircleRemove } from "react-icons/ci";
const Cartitems = () => {
    const {getTotalcartAmount,Imagelist,Cartitem,removefromcart} =useContext(Shopcontext);
  return (
    <>
    <div className='cartitems'>
        <div className="cart-item-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {Imagelist.map((e)=>{
            if(Cartitem[e.id]>0){
            
                return <div>
                    <div className="cart-item-format cart-item-format-main">
                <img src={e.image} alt="" className="carticone-product-icon" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className='cartitem-quantity'>{Cartitem[e.id]}</button>
                <p>${e.price*Cartitem[e.id]}</p>
                <div className='remove-icone' onClick={()=>{removefromcart(e.id)}}><CiCircleRemove /></div>
            </div>
            <hr/>
            </div>
            }
            return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart total</h1>
                    <div>
                <div className="cartitem-total-item">
                    <p>subtatal</p>
                    <p>${getTotalcartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>shipping free</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalcartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECK OUT</button>
                <div className="cartitem-promocode">
                    <p>If you have a promo, code enter here</p>
                    <div className="cartitem-promobox">
                        <input type="text" name="" placeholder='Promo code' id="" />
                        <button>Submit</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Cartitems