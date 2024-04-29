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
    <div >
    <h1 className="text-white text-5xl font-bebas">#weekly top selling</h1>
      <div className="grid grid-cols-4 gap-4 ml-20  ">
      {week.map((k) => 
       { if(k.id === 18 || k.id ===7 || k.id ===16 || k.id ===14)
      return  <div key={k.id} className="bg-zinc-400  max-h-84 max-w-60 rounded-md m-3">
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
  )
}

export default Weekly
