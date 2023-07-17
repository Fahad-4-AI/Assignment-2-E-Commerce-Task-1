import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"Categories"}>Categories</NavLink>
      <NavLink to={"Products"}>Products</NavLink>
      <NavLink to={"BestSelling"}>BestSelling</NavLink>
      <NavLink to={"Featured"}>Featured</NavLink>
    </div>
  )
}

export default Navbar
