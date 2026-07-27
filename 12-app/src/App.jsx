import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Home'
import { Route, Routes } from 'react-router-dom'

import Men from './pages/Men'
import Women from './pages/Women'
import Nopage from './pages/Nopage'
import Details from './pages/Details'
import Navbar2 from './components/Navbar02'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path ='/about/:detailsID' element={<Details/>}></Route>

        <Route path='/Product' element={<Product/>}> 
        <Route path ='Men' element={<Men/>}></Route>
        <Route path ='Women' element={<Women/>}></Route>
        </Route>

        <Route path ='*' element = {<Nopage/>}></Route>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App

