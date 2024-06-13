import { useDispatch,useSelector } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { fetchProduct } from '../Slices/productSlice';
import {Statutes} from '../Slices/productSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce } from 'react-toastify';
import { useEffect, useState } from 'react';

const Search = () => {
  const {data,status} = useSelector((state)=>state.product)
  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  const [filteredData, setfilterData] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState('all')
  useEffect(() => {
   dispatch(fetchProduct())
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
 
  const handleSearch = (e) => {
    let filtered;
    if (selectedCategory === 'all') {
      filtered = data.filter(item =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      filtered = data.filter(item =>
        item.title.toLowerCase().includes(input.toLowerCase()) &&
        item.category === selectedCategory
      );
    }
    setfilterData(filtered);
   
  };
  const handle = (k) => {
    dispatch(add(k))
    notify()
  }
  if(status == Statutes.LOADING) {
    return <h1 className="font-bold text-white text-4xl font-bebas">Loading.....</h1>
 }
 if(status == Statutes.ERROR) {
   return <h1 className="font-bold text-4xl text-white font-bebas">Something went wrong....</h1>
 }
  return (
    <div className="text-center">
    <div className="absolute top-[60px] right-[30px]"> 
    <input className="p-3 text-black rounded-xl border-none" type="text" placeholder="search..." value={input} onChange={(e)=>setInput(e.target.value)} /> <br /> <br />
    <select className="text-black p-3 rounded-lg cursor-pointer mr-2" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="women's clothing">Womens</option>
        <option value="men's clothing">Mens</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>

      </select>
    <button className="text-white bg-zinc-500 p-2 rounded-xl" onClick={handleSearch} >Search</button>
    </div>
    <div className="">
      <div className="grid grid-cols-4 gap-4 m-12 ">
        {filteredData.map((k) => (
          <div key={k.id} className="bg-zinc-700  max-h-84 max-w-60 rounded-md ">
          <div key={k.id} className='p-4 place-items-center '>
            <img className="h-44 w-52 gap-x-6 rounded-lg " src={k.image} alt="" />
            <p className="font-sans text-white font-semibold text-sm mt-3">{k.title}</p>
           
            <p className="text-sm text-white font-semibold my-3">Price : ${k.price}</p>
            <button onClick={() => {handle(k)}} className='bg-white text-black py-4 px-10 rounded-2xl font-bold my-6 hover:bg-zinc-400 hover:text-white'>Add to cart</button>
            <ToastContainer />
          </div>

        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Search
