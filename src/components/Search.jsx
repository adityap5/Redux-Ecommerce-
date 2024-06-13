import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Slices/cartSlice';
import { fetchProduct, Statutes } from '../Slices/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useEffect, useState } from 'react';

const Search = () => {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [filteredData, setFilterData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

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

  const handleSearch = () => {
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
    setFilterData(filtered);
    setShowSearch(false); // Hide the search section
  };

  const handleAddToCart = (item) => {
    dispatch(add(item));
    notify();
  };

  if (status === Statutes.LOADING) {
    return <h1 className="font-bold text-white text-4xl font-bebas">Loading.....</h1>;
  }
  if (status === Statutes.ERROR) {
    return <h1 className="font-bold text-4xl text-white font-bebas">Something went wrong....</h1>;
  }

  return (
    <div className="text-center">
      {showSearch && (
        <div className="absolute top-[60px] right-[30px]">
          <input
            className="p-3 text-black rounded-xl border-none"
            type="text"
            placeholder="search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /> <br /> <br />
          <select
            className="text-black p-3 rounded-lg cursor-pointer mr-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="women's clothing">Womens</option>
            <option value="men's clothing">Mens</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <button
            className="text-white bg-zinc-500 p-2 rounded-xl"
            onClick={handleSearch}
          >Search</button>
        </div>
      )}
      <div className="px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-12">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-zinc-700 max-h-84 rounded-md p-4">
              <div className="place-items-center">
                <img
                  className="h-44 w-full object-cover rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                <p className="font-sans text-white font-semibold text-sm mt-3">{item.title}</p>
                <p className="text-sm text-white font-semibold my-3">Price: ${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-white text-black py-2 px-4 rounded-2xl font-bold my-6 hover:bg-zinc-400 hover:text-white"
                >Add to cart</button>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
