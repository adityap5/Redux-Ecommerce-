import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
function Layout() {
  const scroll = new LocomotiveScroll();
  return (
   <>
   <Header/>
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout
