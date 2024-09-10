import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Coin from './Pages/Coin/Coin'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin:coinId" element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App