import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function FeaturedProducts() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const res = await fetch('https://fakestoreapi.com/products?limit=5');
            let data = await res.json();
            setProduct(data);
        }
        fetchdata();
    }, []);

    const notify = () => toast.success('Added to cart!', {
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
        dispatch(add(k));
        notify();
    }

    return (
        <div className='text-center p-4 md:p-20'>
            <h1 className="text-[#ffffff] text-3xl md:text-5xl font-bebas mb-8 md:mb-14">#Featured Product</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                {product.map((k) => (
                    <div key={k.id} className="bg-zinc-700 rounded-md p-4 flex flex-col items-center justify-between h-full">
                        <div className="w-full h-44 mb-4">
                            <img className="w-full h-full object-contain rounded-lg" src={k.image} alt={k.title} />
                        </div>
                        <div className="flex flex-col items-center flex-grow">
                            <p className="font-sans text-white font-semibold text-sm mb-2 line-clamp-2">{k.title}</p>
                            <p className="text-sm text-white font-semibold mb-4">Price: ₹{k.price}</p>
                        </div>
                        <button onClick={() => { handle(k) }} className='bg-white text-black py-2 px-4 md:py-3 md:px-8 rounded-2xl font-bold hover:bg-zinc-400 hover:text-white w-full'>Add to cart</button>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default FeaturedProducts;
