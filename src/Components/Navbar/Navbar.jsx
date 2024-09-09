import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="nav-right">
          <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">NGN</option>
          </select>
          <button>Sign up <img src={icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar