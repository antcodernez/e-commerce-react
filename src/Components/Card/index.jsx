import React from 'react'

function Card() {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
        <img src="https://imgs.search.brave.com/uF9gysER4lWWf00OGd4eIePMolZ_lIt-NfswsVkvz5I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvNjYwL2Nw/c3Byb2RwYi8xMENB/QS9wcm9kdWN0aW9u/L185NTI4Nzc4Nl9f/OTUyMDcxNjFfZjAx/NzI2OTUtYXJ0d29y/a19vZl9hX3RyaWNl/cmF0b3BzLXNwbC5q/cGc" alt="plants" className='w-full h-full object-cover rounded-lg'/>
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-md font-light'>Tecnology</span>
        <span className='text-lg font-medium'>$300</span>
      </p>
    </div>
  )
}

export {Card}
