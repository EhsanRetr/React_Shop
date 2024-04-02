import React, { useContext } from 'react'
import "./shop-category.css"
import { Shopcontext } from '../../containers/context/shopcontext'
import Products from '../../components/products/products';

export const Shopcategory = (props) => {
    const {Imagelist} = useContext(Shopcontext);
  return (
    <div className='shop-category'>
        {Imagelist.map((item,i)=>{
            if(props.category===item.category){
                return <Products key={i} category={item.category} id={item.id} image={item.image} name={item.name}   price={item.price}/>
            }else{
                return null
            }
        })}
    </div>
  )
}
