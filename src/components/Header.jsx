import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom'
function Header() {


  let count = useSelector((state) => state.cart);
  
  const styles = () => {
    setStyle('inline absolute top-16 w-44 h-8 p-2 rounded-lg border-[1px] border-[#ffecd1]')
  }
  return (
    <>
      <nav className="bg-[#141413] list-none flex place-content-between items-center py-2 px-14 ">
        <NavLink to="/">
          <h1 className="font-dance text-3xl text-white">Company</h1>
        </NavLink>
        <div className="font-medium">
          <NavLink style={({ isActive }) => {
            return { color: isActive ? "#ffecd1" : "#483c32" }
          }}
            to="/"
            className="text-xl p-3 cursor-pointer">Home</NavLink>

          <NavLink style={({ isActive }) => {
            return { color: isActive ? "#ffecd1" : "#483c32" }
          }}
            to="shop"
            className="text-xl  p-3 cursor-pointer">Shop</NavLink>
          <NavLink style={({ isActive }) => {
            return { color: isActive ? "#ffecd1" : "#483c32" }
          }}
            to="about" className="text-xl p-3 cursor-pointer">About us</NavLink>
        </div>
        <div className="flex place-content-between items-center gap-6">
          <div className="font-bold  border-2 border-[#ffecd1] w-20 p-2 rounded-lg ">
            <NavLink style={({ isActive }) => {
              return { color: isActive ? "#483c32" : "#ffecd1" }
            }}
              to="cart" >Cart</NavLink>
            <div className="absolute right-[113px] top-1 w-5 h-6 rounded-full border-[1px] border-[#ffecd1] bg-[#141413]  text-[#ffecd1]">
              {count.length}
            </div>

          </div>
          <p className='text-white text-3xl cursor-pointer'
            onClick={styles}
          >
 <NavLink to="search" >🔍 </NavLink>
          </p>
  
        </div>
      </nav>

      
    </>
  )
}

export default Header