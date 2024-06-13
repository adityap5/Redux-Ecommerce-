import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';

function Weekly() {
    const [week,setWeek]=useState([])
    const dispatch = useDispatch()
    useEffect(() => {  
      async function fetchdata() {
        const res2 = await fetch('https://fakestoreapi.com/products')
        let data2 = await res2.json()
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
    <div className='text-center p-20'>
    <h1 className="text-white text-5xl font-bebas mb-14">#weekly top selling</h1>
      <div className="grid grid-cols-5">
      {week.map((k) => 
       { if(k.id === 18 || k.id ===11 || k.id ===16 || k.id ===14 || k.id ===15)
      return  <div key={k.id} className="bg-zinc-700  max-h-84 max-w-60 rounded-md">
          <div className='p-4 place-items-center '>
            <img className="h-44 w-52 gap-x-6 rounded-lg " src={k.image} alt="" />
            <p className="font-sans text-white font-semibold text-sm mt-3">{k.title}</p>
            <p className="text-sm text-white font-semibold my-3">Price : ${k.price}</p>
            <button onClick={() => {handle(k)}} className="bg-white border border-[#ffecd1] text-black rounded-lg px-4 py-2 hover:bg-zinc-200">Add to cart</button>
            <ToastContainer />
          </div>

        </div>
       
        }
      )}
    </div>
    </div>
  )
}

export default Weekly
