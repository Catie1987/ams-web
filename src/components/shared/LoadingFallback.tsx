import React from 'react'

export default function LoadingFallback() {
  return (
    <div className='w-full min-h-40 flex items-center justify-center px-4'> 
        <p className='text-black/50 max-w-96'>Loading...</p> 
    </div>
  )
}
