import { useState } from 'react'
import axios from "axios";
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css'


import Home from './pages/Home';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import Products from './pages/Products'
import Featured from './pages/Products/Featured';
import BestSelling from './pages/Products/BestSelling';
import ErrorPage from './pages/ErrorPage';





function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/ >}></Route>
      <Route path='/Categories' element={<Categories/ >}></Route>
      <Route path='/Products' element={<Products/ >}></Route>
        <Route index element={<Products />} />
        <Route path="Featured" element={<Featured />} />
        <Route path="BestSelling" element={<BestSelling />} />
      <Route path='*' element={<ErrorPage />}></Route>

      </Routes> 

    </>
  )
}

export default App
