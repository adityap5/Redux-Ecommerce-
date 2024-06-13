import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  let count = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
  const styles = () => {
    setStyle('inline absolute top-16 w-44 h-8 p-2 rounded-lg border-[1px] border-[#ffecd1]');
  };
 const handleSearch=()=>{
     navigate("/search")
     setShowSearch(true)
 }
  return (
    <>
      <nav className="sticky bg-[#141413] list-none flex flex-col md:flex-row md:place-content-between items-center m-4 p-2 rounded-xl">
        <NavLink to="/">
          <h1 className="font-dance text-3xl text-white">Company</h1>
        </NavLink>
        <div className="font-medium flex flex-col md:flex-row">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}
            to="/"
            className="text-xl p-3 cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}
            to="/shop"
            className="text-xl p-3 cursor-pointer"
          >
            Shop
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}
            to="/about"
            className="text-xl p-3 cursor-pointer"
          >
            About us
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row place-content-between items-center gap-6">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#483c32" : "#ffecd1" })}
            to="/cart"
          >
            <div className="font-bold border-2 border-[#ffecd1] w-20 p-2 rounded-lg">
              <p>
                Cart
                <span className="ml-2 bg-[#141413] text-[#ffecd1]">
                  {count.length}
                </span>
              </p>
            </div>
          </NavLink>
          <p className="text-white text-3xl cursor-pointer" onClick={styles}>
            <p onClick={handleSearch}>🔍</p>
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
