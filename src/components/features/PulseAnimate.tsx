import React from 'react'

export default function PulseAnimate() {
  return (
    <div className='absolute flex justify-center items-center h-10 w-10'>
        <div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>
        <div className='absolute h-2 w-2 border-2 border-[--cta2] rounded-full animate-ping animate-infinite animate-duration-1000 animate-ease-out'></div>
        <div className='absolute h-3 w-3 border border-[--cta2] rounded-full animate-ping animate-infinite animate-duration-1000 animate-ease-out'></div>
        <div className='absolute h-4 w-4 border border-[--cta2] rounded-full animate-ping animate-infinite animate-duration-1000 animate-ease-out'></div>
    </div>
  )
}
