import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import carpet1 from "../../components/assets/carpet-01.jpg"
const Home = () => {
  return (
    <>
    <div className="HomeWelcome">
        <h1>Wecome to the Carp#et Store </h1>
        <h3>You can  choose the category below </h3>
    </div>
    <div className="HomeButtoms">
        <Link to="/Localstore">
          <button className="button button--janus">
            <span>Local Store</span>
          </button>
        </Link>
        <Link to="/ForHouse">
          <button className="button button--janus">
            <span>For Home</span>
          </button>
        </Link>
      </div>
      <div className='img1'>
      <img className='carpet-img1' alt='' src={carpet1}/>
      <p className=' text-center'>the discription aboute carpets download from website and paste hem there</p>
      </div>
      </>
  )
}

export default Home