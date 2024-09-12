import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../Context/CoinContext'

const Home = () => {
  const {allCoin, currency}= useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(()=>{
    setDisplayCoin(allCoin )
  },[allCoin])

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>World Largest CryptoCurrency Palace</p>
        <form action="">
          <input type="text" name="" id="" placeholder="Search Crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ marginLeft: '3rem' }}>24h Change</p>
          <p>Market Cap</p>
          <p className="market"></p>
        </div>
        {displayCoin.slice(0, 15).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p className="price">
                <span className="name">{item.name} - </span>
                <span className="symbol">{item.symbol}</span>
              </p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}
            >
              {item.price_change_percentage_24h}
            </p>
            <p className="market">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
            <div className="inner">
              <a
                href={`https://www.coingecko.com/en/coins/${
                  item.name.charAt(0).toLowerCase() + item.name.slice(1)
                }`}
                title="Price "
                className="b2m-btn btn-ghost"
              >
                {' '}
                Details{' '}
              </a>
              <a title="Buy  at the best price" className="b2m-btn btn-solid">
                {' '}
                Buy{' '}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home