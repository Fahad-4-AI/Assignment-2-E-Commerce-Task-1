import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"Categories"}>Categories</NavLink>
      <NavLink to={"Products"}>Products</NavLink>
    </div>
  )
}

export default Navbar
