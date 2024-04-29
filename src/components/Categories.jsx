import React from 'react'

function Categories() {
  return (
    <div className='flex justify-between align-center px-32 py-14'>
        <div className=''> <img 
        className='object-cover h-[320px] w-[520px] rounded-xl'
        src="https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtb2RlbCUyMG1hbiUyMGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
        <p className="text-2xl mt-2">mens</p>
        </div>
        <div className=' '><img
        className='object-cover h-[320px] w-[520px] rounded-xl'
        src="https://images.unsplash.com/photo-1630568001199-984008a7d6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxtb2RlbCUyMGdpcmwlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D" alt="" />
        <p className="text-2xl mt-2">womens</p></div>
      </div>
  )
}

export default Categories
