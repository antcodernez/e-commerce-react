import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({category: {name}, images, price, title}) {
  
  return (
    <div className='bg-white cursor-pointer w-60 h-70 rounded-lg'>
      <figure className='relative mb-2 w-full h-3/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{name}</span>
        <img src={images[0]} alt={title} className='w-full h-full object-cover rounded-lg'/>
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-md font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export {Card}
