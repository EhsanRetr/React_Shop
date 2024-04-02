import React from 'react'
import "./breadcrum.css"
import { MdKeyboardArrowRight } from "react-icons/md";
const Breadcrum = (props) => {
    const {Productpage} = props;
  return (
   <div className='breadcrum'>
    Home<MdKeyboardArrowRight />Shop<MdKeyboardArrowRight />{Productpage.name}
   </div> 
  )
}

export default Breadcrum