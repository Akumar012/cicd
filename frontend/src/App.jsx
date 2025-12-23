import React from 'react'

const App = () => {
  return (
   <div className='flex flex-col border-2 rounded-md m-4 items-center w-1/2 m-auto mt-20 '>
    <div className=' flex items-center justify-center
     text-xl font-bold text-white bg-teal-800 w-full p-4'>
      <p>
      News you can Trust
      </p>
    </div>
    <div className='flex flex-col items-center justify-center gap-2 py-4 '>
      <h3 className='text-lg font-semibold text-center'>Stay up to date with the Latest!</h3>
    <p className='text-center font-medium text-md'>Subscribe to our newsletter for daily updates.</p>
    <input type="text" className='border-2 p-2 rounded-md text-center bg-gray-100 border-none  focus:outline-teal-800' placeholder='you@example.com'/>
    <button className='bg-teal-800 text-white p-2 rounded-full hover:cursor-pointer px-16 py-2'>Subscribe</button>
    <p>We value your privacy and promise not to spam you.</p>
    </div>
   </div>
  )
}

export default App
