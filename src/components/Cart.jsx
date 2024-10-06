import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast.success('Removed from cart!', {
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

  const handle = (productId) => {
    dispatch(remove(productId));
    notify();
  };

  return (
    <>
      <div className="text-center py-10">
        {cartItems.length === 0 ? (
          <div className="py-40">
            <p className="text-3xl text-zinc-600">Your Cart is empty</p>
            <p
              onClick={() => navigate('/shop')}
              className="mt-4 inline-block cursor-pointer rounded-md border border-transparent bg-white px-8 py-3 text-center font-semibold text-black hover:bg-zinc-400 hover:text-white"
            >
              Shop Now
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row p-6 sm:p-10 items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-200">
                <div className="overflow-hidden rounded-lg max-w-[15rem] sm:max-w-[20rem]">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover object-top"
                    alt={item.title}
                  />
                </div>
                <div className="flex-1 text-start sm:text-left">
                  <h1 className="text-xl sm:text-2xl font-semibold">{item.title}</h1>
                  <p className="text-sm sm:text-base text-zinc-600">{item.category}</p>
                  <p className="mt-4 text-lg sm:text-xl">USD : ${item.price}.00</p>
                  <p className="text-zinc-600 text-xs sm:text-sm">incl. of taxes <br />(Also includes all applicable duties)</p>
                  <p className="text-zinc-300 mt-4 text-sm sm:text-base">{item.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
                    <p className="mt-2 text-sm sm:text-base">Available stock: {item.stock}</p>
                    <p className="mt-2 text-sm sm:text-base">{item.rating.rate}⭐ ({item.rating.count})</p>
                  </div>
                </div>
                <button
                  onClick={() => handle(item.id)}
                  className="bg-white text-black rounded-2xl font-bold px-6 py-3 mt-4 sm:mt-0 hover:bg-zinc-400 hover:text-white"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default Cart;
