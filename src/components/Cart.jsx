import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Cart() {
 
const cartItems = useSelector((state)=>state.cart)
const dispatch = useDispatch()
const navigate = useNavigate()
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
}
  return (
    <>
    <div className="text-center">
    {cartItems == 0 ? 
    (<div className='py-40'><p className="text-3xl text-zinc-600">Your Cart is empty</p><p
      onClick={()=>navigate("/shop")}
        className="box1 mt-4 inline-block cursor-pointer rounded-md border border-transparent bg-white px-8 py-3 text-center font-semibold text-black hover:bg-zinc-400 hover:text-white"
      >
        Shop Now
      </p></div>)  :

    (<div className="space-y-8">
        {cartItems.map((k) => (
          <div className="flex p-10 ">
          <div className="overflow-hidden rounded-lg max-w-[15rem] max-h-[15rem]">
                  <img
                    src={k.image}
                    className="h-full w-full object-cover object-top"
                    alt={k.title}
                  />
                </div>
          <div className="justify-center text-start ml-16 mr-16">
              <h1 className='text-xl'>{k.title}</h1>
              <p className=''>{k.category}</p>

              <p className='mt-4'>USD : ${k.price}.00</p>
              <p className='text-zinc-600 '>incl. of taxes <br />
                  (Also includes all applicable duties)</p>
              <p className="text-zinc-300 mt-4">{k.description}</p>
              <div className='flex justify-between items-center mt-2'>
              </div>
              <p className='mt-2'>available stock: </p>
              <p className='mt-2'>{k.rating.rate}⭐ ({k.rating.count})</p>
          </div>
              <button onClick={() => handle(k.id)} className='min-h-20 min-w-40 bg-white text-black  rounded-2xl font-bold my-6 hover:bg-zinc-400 hover:text-white'>Remove from Cart</button>
              <ToastContainer  />
      </div>
        )
      )
}
      </div>)}
      </div>
    </>
   
  )
}

export default Cart
