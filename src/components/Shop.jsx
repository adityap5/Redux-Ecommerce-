import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { fetchProduct, Statutes } from '../Slices/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function Shop() {
  const { data: product, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const notify = () =>
    toast.success('Added to cart!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });

  const handle = (k) => {
    dispatch(add(k));
    notify();
  };

  if (status === Statutes.LOADING) {
    return <h1 className="font-bold text-white text-4xl font-bebas">Loading.....</h1>;
  }
  if (status === Statutes.ERROR) {
    return <h1 className="font-bold text-4xl text-white font-bebas">404 Not Found</h1>;
  }
  return (
    <>
      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 md:m-8 lg:m-12">
          {product.map((k) => (
            <div key={k.id} className="bg-zinc-700 max-h-84 max-w-60 rounded-md">
              <div className="p-4 place-items-center">
                <img className="h-44 w-full sm:w-52 rounded-lg" src={k.image} alt="" />
                <p className="font-sans text-white font-semibold text-sm mt-3">{k.title}</p>
                <p className="text-sm text-white font-semibold my-3">Price: ${k.price}</p>
                <button
                  onClick={() => handle(k)}
                  className="bg-white text-black py-2 px-6 sm:py-4 sm:px-10 rounded-2xl font-bold my-4 sm:my-6 hover:bg-zinc-400 hover:text-white"
                >
                  Add to cart
                </button>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
