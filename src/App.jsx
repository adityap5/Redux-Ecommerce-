import { useEffect, useState } from 'react';
import './App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add } from './Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';
function App() {
 
  
  const [product, setProduct] = useState([])
  const [week,setWeek]=useState([])
  const dispatch = useDispatch()
  useEffect(() => {
  //  dispatch(fetchProduct())

    async function fetchdata() {
      const res = await fetch('https://fakestoreapi.com/products?limit=4')
      const res2 = await fetch('https://fakestoreapi.com/products')
      let data = await res.json();
      let data2 = await res2.json()
  
      setProduct(data)
      setWeek(data2)
    }
    fetchdata()
  }, [])

  const notify = ()=> toast.success('Added to cart!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce
    });

  const handle = (k) => {
    dispatch(add(k))
    notify()
  }

  return (
    <>
    <div className="bg-black">
      <h1 className="bg-black text-[#FCE2D1] text-5xl font-bebas">#Featured Product</h1>
        <div className="grid grid-cols-4 gap-4 m-12 bg-black ">
        {product.map((k) => (
          <div key={k.id} className="bg-[#141413]  max-h-84 max-w-60 rounded-md m-3">
            <div key={k.id} className='p-4 place-items-center '>
              <img className="h-44 w-52 gap-x-6 rounded-lg " src={k.image} alt="" />
              <p className="font-sans text-white font-semibold text-sm mt-2">{k.title}</p>
             
              <p className="text-sm text-white font-semibold  mt-2 mb-2">Price : ${k.price}</p>
              <button onClick={() => {handle(k)}} className="bg-[#483c32] text-[#ffecd1] rounded-lg p-2 text-sm">Add to cart</button>
              <ToastContainer />
            </div>

          </div>
        ))}
      </div>
      </div>

      <div className='flex justify-between align-center px-32 py-14'>
        <div className=''> <img 
        className='object-cover h-[320px] w-[520px] rounded-lg'
        src="https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtb2RlbCUyMG1hbiUyMGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
        <p>mens</p>
        </div>
        <div className=' '><img
        className='object-cover h-[320px] w-[520px] rounded'
        src="https://images.unsplash.com/photo-1630568001199-984008a7d6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxtb2RlbCUyMGdpcmwlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D" alt="" />
        <p>womens</p></div>
      </div>
      
      <div >
      <h1 className="bg-black text-[#FCE2D1] text-5xl font-bebas">#weekly top selling</h1>
        <div className="grid grid-cols-4 gap-4 m-12 bg-black ">
        {week.map((k) => 
         { if(k.id === 18 || k.id ===7 || k.id ===16 || k.id ===14)
        return  <div key={k.id} className="bg-[#141413]  max-h-84 max-w-60 rounded-md m-3">
            <div className='p-4 place-items-center '>
              <img className="h-44 w-52 gap-x-6 rounded-lg " src={k.image} alt="" />
              <p className="font-sans text-white font-semibold text-sm mt-2">{k.title}</p>
              <p className="text-sm text-white font-semibold  mt-2 mb-2">Price : ${k.price}</p>
              <button onClick={() => {handle(k)}} className="bg-[#483c32] text-[#ffecd1] rounded-lg p-2 text-sm">Add to cart</button>
              <ToastContainer />
            </div>

          </div>
         
          }
        )}
      </div>
      </div>
      <div><h3 className='text-white uppercase font-bebas tracking-widest text-2xl'>free delivery + return over Rs2000 collecct from store</h3></div>
    </>
  )
}

export default App
