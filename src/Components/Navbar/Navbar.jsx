import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


   const navigate = useNavigate()
   const handleLoginClick = () => {
     navigate('/signup')
   }
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' })
        break
      }
      case 'Ngn': {
        setCurrency({ name: 'Ngn', symbol: '#' })
        break
      }
      default : {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
    }
  }
  return (
    <div className='navbar'>
      <a href="/">
        <img src={logo} alt="" className='logo' />
      </a>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="nav-right">
          <select name="" id="" onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="Ngn">NGN</option>
          </select>
          <button onClick={handleLoginClick}>Sign up <img src={icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar