import { useState } from 'react'
import axios from "axios";
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css'


import Home from './pages/Home';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import Products from './pages/Products'





function App() {
  return (
    <>
     <h1>hello world</h1>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/ >}></Route>
      <Route path='/Categories' element={<Categories/ >}></Route>
      <Route path='/Products' element={<Products/ >}></Route>

      </Routes> 

    </>
  )
}

export default App
