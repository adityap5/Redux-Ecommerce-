import React from 'react';

function Categories() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-28 py-10 text-center space-y-6 md:space-y-0 md:space-x-6'>
      <div className='w-full md:w-auto'>
        <img 
          className='cursor-pointer object-cover h-[200px] w-full md:h-[320px] md:w-[520px] rounded-xl'
          src="https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtb2RlbCUyMG1hbiUyMGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="mens" 
        />
        <p className="text-xl md:text-2xl mt-2">mens</p>
      </div>
      <div className='w-full md:w-auto'>
        <img
          className='cursor-pointer object-cover h-[200px] w-full md:h-[320px] md:w-[520px] rounded-xl'
          src="https://images.unsplash.com/photo-1630568001199-984008a7d6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxtb2RlbCUyMGdpcmwlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D" alt="womens" 
        />
        <p className="text-xl md:text-2xl mt-2">womens</p>
      </div>
    </div>
  );
}

export default Categories;
