import './App.css'
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Weekly from './components/Weekly';
function App() {
 

  return (
    <>
    <FeaturedProducts/>
    <Categories/>
    <Weekly/>
    <div><h3 className='text-white uppercase font-bebas tracking-widest text-2xl'>free delivery + return over Rs2000 collecct from store</h3></div>
    </>
  )
}

export default App
