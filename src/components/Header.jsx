import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };
  let count = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
 
  const handleSearch = () => {
    navigate("/search");
    setShowSearch(true);
  }
 
  return (
    <>
      <nav className="sticky bg-[#141413] list-none flex flex-col md:flex-row justify-between items-center m-4 p-2 rounded-xl">
        <div className="flex justify-between items-center w-full md:w-auto">
          <NavLink to="/">
            <h1 className="font-dance text-3xl text-white">ReCommerce</h1>
          </NavLink>
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex font-medium items-center">
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
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#483c32" : "#ffecd1" })}
            to="/cart"
            className="ml-4"
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
          <p className="text-white text-3xl cursor-pointer ml-4" onClick={handleSearch}>
            🔍
          </p>
        </div>
      </nav>
      
     

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#141413',
            color: '#ffecd1',
            width: 250,
          },
        }}
      >
        <List>
          <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)} style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}>
            <ListItemText primary="Home" primaryTypographyProps={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }} />
          </ListItem>
          <ListItem button component={NavLink} to="/shop" onClick={toggleDrawer(false)} style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}>
            <ListItemText primary="Shop" primaryTypographyProps={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }} />
          </ListItem>
          <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)} style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}>
            <ListItemText primary="About us" primaryTypographyProps={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }} />
          </ListItem>
          <ListItem button component={NavLink} to="/cart" onClick={toggleDrawer(false)} style={({ isActive }) => ({ color: isActive ? "#ffecd1" : "#483c32" })}>
            <ListItemText primary="Cart" primaryTypographyProps={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
