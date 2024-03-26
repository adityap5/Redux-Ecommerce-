import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';
function FeaturedProducts() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    useEffect(() => {
          async function fetchdata() {
            const res = await fetch('https://fakestoreapi.com/products?limit=4')
            let data = await res.json();
            setProduct(data)
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
  )
}

export default FeaturedProducts
