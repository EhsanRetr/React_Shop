import React from 'react'
import logo from "../../components/assets/logo.jpg"
import { Link } from 'react-router-dom'
import "./footer.css"
export const Footer = () => {
  return (
    <footer>
    <div className='footer'>
    <Link to="/Home"><img src={logo} alt='' className='logo-footer'/></Link>
    <h1 className='text-white'>Carp#t Store</h1>
    </div>
    </footer>
  )
}
