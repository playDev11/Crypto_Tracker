import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>World Largest CryptoCurrency Palace</p>
        <form action="">
        <input type="text" name="" id="" placeholder='Search Crypto...' />
        <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className='market'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home