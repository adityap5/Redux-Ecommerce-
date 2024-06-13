import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';
function Cart() {
 
const cartItems = useSelector((state)=>state.cart)
const dispatch = useDispatch()

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


const handle=(productId)=>{
  dispatch(remove(productId))
 notify()
  console.log("nikal")
}
  return (
    <>
    <div className="">
    <h1 className=" text-white text-3xl">CART ITEMS</h1>
    <div className="grid grid-cols-4 gap-4 m-12 ">
        {cartItems.map((k) => (
          <div key={k.id} className="bg-zinc-400  max-h-84 max-w-60 rounded-md m-3">
            <div  className='p-4 place-items-center'>
              <img className="h-44 w-52 gap-x-6 " src={k.image} alt="" />
              <p className="font-sans text-white font-semibold text-sm mt-2">{k.title}</p>
              {/* <p>{k.description}</p> */}
              <p className="text-sm font-semibold text-white mt-2 mb-2">Price : ${k.price}</p>
              <button onClick={() => handle(k.id)}className="bg-[#141413] text-[#ffecd1] rounded-lg p-2 text-sm">Remove</button>
              <ToastContainer  />
            </div>
          </div>
        )
      )
}
      </div>
      </div>
    </>
   
  )
}

export default Cart
