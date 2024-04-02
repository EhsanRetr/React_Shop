import React, { createContext, useState } from 'react'
import Imagelist from '../../components/assets/data';
export const Shopcontext = createContext(null);
const getdfaultcart = ()=>{
    let Cart = {};
    for (let index = 0; index < Imagelist.length+1; index++){
        Cart[index] = 0;
    }
    return Cart;
}
const Shopcontextprovider = (props) =>{
    const[Cartitem,setCartitem] = useState(getdfaultcart());

    const addtocart = (Productsid)=>{
        setCartitem((prev)=>({...prev,[Productsid]:prev[Productsid]+1}))
    }

    const removefromcart = (Productsid)=>{
        setCartitem((prev)=>({...prev,[Productsid]:prev[Productsid]-1}))
    }
    const getTotalcartAmount = ()=>{
        let TotalAmount = 0;
        for (const Products in Cartitem){
            if (Cartitem[Products]>0)
            {
                let iteminfo = Imagelist.find((Productpage)=>Productpage.id===Number(Products))
                TotalAmount += iteminfo.price*Cartitem[Products];
            }
        }
        return TotalAmount
    }
    const gettotalcartItem =()=>{
        let totalitem = 0 ;
        for (const Products in Cartitem)
        {
            if(Cartitem[Products]>0)
            {
                totalitem += Cartitem[Products];
            }
        }
        return totalitem;
    }
    const contextValue = {gettotalcartItem,getTotalcartAmount,Imagelist,Cartitem,addtocart,removefromcart};
    return <Shopcontext.Provider value={contextValue}>

        {props.children}
    </Shopcontext.Provider>

}
export default Shopcontextprovider;