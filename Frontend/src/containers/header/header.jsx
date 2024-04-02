import React, { useContext } from 'react'
import Logo from "../../components/assets/logo.jpg"
import "./header.css"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../context/shopcontext'
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  const {gettotalcartItem} = useContext(Shopcontext);
  return (
    <>
    <header>
    <div className='Header-container'>
    <Link to="/Home"><img className='' alt='' src={Logo}/></Link>
        <p><Link className='headerlinks' to="/Home">صفحه اصلی</Link></p>
        <p><Link className='headerlinks' to="/Shop">فروشگاه</Link></p>
        <p className='Carticone'><Link to="/Cart"><CiShoppingCart/></Link>{gettotalcartItem()}</p>
        <p id='login'><Link className='headerlinks' to="/Login">ورود|ثبت نام</Link></p>
    </div>Carticone
    </header>
    <br/><br/><br/><br/>
    </>
  )
}

export default Header