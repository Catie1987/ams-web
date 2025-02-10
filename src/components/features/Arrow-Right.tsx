import React from 'react'

export default function ArrowRight() {
  return (
    <div className='absolute right-4'>
        <span className='block fill-[--cta2]  h-4 w-4 transform group-hover:transition-all group-focus:translate-x-10 group-hover:opacity-0 group-hover:translate-x-10 group-hover:duration-300 group-focus:duration-300'>
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                ></path>
            </svg>
        </span>
        <span className='block absolute group-hover:fill-white group-focus:fill-white top-0 left-0 h-4 w-4 opacity-0 transform group-hover:transition-all fill-[--cta2] -translate-x-10 group-focus:translate-x-0 group-hover:translate-x-0 group-hover:duration-300 group-hover:opacity-100'>
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                ></path>
            </svg>
            </span>
    </div>
  )
}
