import React from 'react'

export default function ExternalRight() {
  return (
    <div className='mr-4 relative'>
        <span className='block fill-none stroke-[--cta2] h-4 w-4 transform group-hover:transition-all group-focus:translate-x-10 group-hover:opacity-0 group-hover:translate-x-10 group-hover:duration-300 group-focus:duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>
            </svg>
        </span>
        <span className='block fill-none absolute group-hover:stroke-[--cta2] group-focus:stroke-[--cta2] top-0 left-0 h-4 w-4 opacity-0 transform group-hover:transition-all stroke-white -translate-x-10 group-focus:translate-x-0 group-hover:translate-x-0 group-hover:duration-300 group-hover:opacity-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>
            </svg>
        </span>
    </div>
  )
}
