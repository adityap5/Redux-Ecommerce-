import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const scroll = new LocomotiveScroll();

  return (
    <>
    <Header/>
    <Outlet />
    <div><h3 className='text-white uppercase font-bebas tracking-widest text-2xl'>free delivery + return over Rs2000 collecct from store</h3></div>
    <Footer />
    </>
  )
}

export default App
