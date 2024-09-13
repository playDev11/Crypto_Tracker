import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Coin from './Pages/Coin/Coin'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Signup from './Components/Signup/signup'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin:coinId" element={<Coin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App