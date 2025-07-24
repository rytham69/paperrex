import React from 'react'
import { Route, Routes } from 'react-router-dom'

 import RosterDetail from '../roster/RosterDetail'
 import Home from '../pages/Home.Jsx'
 import Roster from '../pages/Roster.jsx'
 import Signup from '../pages/Signup.jsx'
 import Login from '../pages/Login.jsx'
 import Profile from '../pages/Profile.jsx'
 import Products from '../pages/Products.jsx'
 import ProductDetails from '../product/ProductDetails.jsx'
 import About from '../pages/About.jsx'
 import PageNotFound from '../pages/PageNotFound.jsx'


const Mainroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    <Route path='/roster' element={<Roster/>}/>
    <Route path='/roster/:name' element={<RosterDetail/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>} />
   </Routes>
  )
}

export default Mainroutes